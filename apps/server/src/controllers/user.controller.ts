import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const userClient = new PrismaClient().user;

export const getQueryUsers = async (req: Request, res: Response) => {
  try {
    const { query, email, phoneNumber } = req.query;
    const filters: any = {};

    if (email) {
      filters.email = String(email);
    }
    if (phoneNumber) {
      filters.phoneNumber = String(phoneNumber);
    }

    if (query) {
      filters.OR = [
        { firstName: { contains: String(query), mode: 'insensitive' } },
        { lastName: { contains: String(query), mode: 'insensitive' } },
        { email: { contains: String(query), mode: 'insensitive' } },
        { phoneNumber: { contains: String(query), mode: 'insensitive' } },
      ];
    }

    const users = await userClient.findMany({
      where: Object.keys(filters).length > 0 ? filters : undefined,
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
