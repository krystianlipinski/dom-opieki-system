import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

// Inicjalizujemy klienta Prisma
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Szyfrujemy hasło. Nigdy nie zapisuj w bazie czystego tekstu!
  const hashedPassword = await bcrypt.hash('admin123', 10);

  // Tworzymy użytkownika-administratora
  // 'upsert' to mądra funkcja: stworzy użytkownika, jeśli nie istnieje,
  // a jeśli istnieje, to go zaktualizuje. Unikamy błędów przy wielokrotnym uruchamianiu.
  const admin = await prisma.user.upsert({
    where: { email: 'admin@domopieki.pl' },
    update: {},
    create: {
      email: 'admin@domopieki.pl',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'Systemu',
      role: 'ZARZADZAJACY', // Nadajemy mu rolę
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
    // Zawsze zamykaj połączenie z bazą na końcu
    await prisma.$disconnect();
  });