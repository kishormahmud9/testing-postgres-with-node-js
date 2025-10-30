export const UserModel = {
  create: async (prisma, data) => prisma.user.create({ data }),
  findByEmail: async (prisma, email) =>
    prisma.user.findUnique({ where: { email } }),
  findByUsername: async (prisma, username) =>
    prisma.user.findUnique({ where: { username } }),
  findById: async (prisma, id) => prisma.user.findUnique({ where: { id } }),
};
