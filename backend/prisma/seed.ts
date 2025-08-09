import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@domopieki.pl' },
    update: {},
    create: {
      email: 'admin@domopieki.pl',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'Systemu',
      role: 'admin',
    },
  });

  console.log(`Created admin user: ${admin.email}`);
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });