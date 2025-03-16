import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const userClient = new PrismaClient().user;

export const getQueryUsers = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    const filters = query
      ? {
          OR: [
            { firstName: { contains: String(query) } },
            { lastName: { contains: String(query) } },
            { email: { contains: String(query) } },
            { phoneNumber: { contains: String(query) } },
          ],
        }
      : undefined;

    const users = await userClient.findMany({
      where: filters,
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const users = await userClient.findUnique({
      where: {
        id: userId,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const users = await userClient.create({
      data: userData,
    });

    res.status(201).json({ data: users });
  } catch (error) {
    console.log('User Data:', req.body);
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const users = await userClient.update({
      where: {
        id: userId,
      },
      data: userData,
    });
    console.log('User Data:', req.body);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};
