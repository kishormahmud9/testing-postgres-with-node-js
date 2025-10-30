export const UserDetailsModel = {
  create: async (prisma, data) => prisma.userDetails.create({ data }),
};
