import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    id: '5f0f36345628b2bb08ddcf83',
    firstName: 'Marina',
    lastName: 'Orozco',
    email: 'marina@wiline.com',
  },
  {
    id: '5f0f3634a3357afc09a0333d',
    firstName: 'Kip',
    lastName: 'Winters',
    email: 'kip@wiline.com',
  },
  {
    id: '5f0f363455f1ad4632d8e4d3',
    firstName: 'Lorie',
    lastName: 'Avery',
    email: 'lorie@wiline.com',
  },
  {
    id: '5f0f36343311956754254404',
    firstName: 'Jasmin',
    lastName: 'Winters',
    email: 'jasmin@wiline.com',
  },
  {
    id: '5f0f36344285b38ab4e9187f',
    firstName: 'Emma',
    lastName: 'Hess',
    email: 'emma@wiline.com',
  },
  {
    id: '5f0f3634abaa863ab18ac741',
    firstName: 'Elvia',
    lastName: 'Acosta',
    email: 'elvia@wiline.com',
  },
  {
    id: '5f0f36342c501774010d92fa',
    firstName: 'Liliana',
    lastName: 'Sweeney',
    email: 'liliana@wiline.com',
  },
  {
    id: '5f0f3634987f2ae9d3c7c48a',
    firstName: 'Florencio',
    lastName: 'Acosta',
    email: 'florencio@wiline.com',
  },
  {
    id: '5f0f3634e8dfd9bbde33c703',
    firstName: 'Delores',
    lastName: 'Sanchez',
    email: 'delores@wiline.com',
  },
];

const phoneNumbers = [
  { email: 'liliana@wiline.com', phoneNumber: '051656592' },
  { email: 'florencio@wiline.com', phoneNumber: '051329392' },
  { email: 'delores@wiline.com', phoneNumber: '051334392' },
];

const mergedUsers = users.map((user) => {
  const phoneEntry = phoneNumbers.find((p) => p.email === user.email);
  return { ...user, phoneNumber: phoneEntry ? phoneEntry.phoneNumber : null };
});

async function main() {
  console.log('Seeding database...');

  await prisma.user.createMany({
    data: mergedUsers,
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
