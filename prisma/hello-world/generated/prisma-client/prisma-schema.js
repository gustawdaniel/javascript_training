module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateUser {
  count: Int!
}

type Balance {
  currency: String!
  platform: String!
  amount: Float!
}

input BalanceCreateInput {
  currency: String!
  platform: String!
  amount: Float!
}

input BalanceCreateManyInput {
  create: [BalanceCreateInput!]
}

input BalanceRestrictedWhereInput {
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  platform: String
  platform_not: String
  platform_in: [String!]
  platform_not_in: [String!]
  platform_lt: String
  platform_lte: String
  platform_gt: String
  platform_gte: String
  platform_contains: String
  platform_not_contains: String
  platform_starts_with: String
  platform_not_starts_with: String
  platform_ends_with: String
  platform_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  AND: [BalanceRestrictedWhereInput!]
}

input BalanceScalarWhereInput {
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  platform: String
  platform_not: String
  platform_in: [String!]
  platform_not_in: [String!]
  platform_lt: String
  platform_lte: String
  platform_gt: String
  platform_gte: String
  platform_contains: String
  platform_not_contains: String
  platform_starts_with: String
  platform_not_starts_with: String
  platform_ends_with: String
  platform_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  AND: [BalanceScalarWhereInput!]
  OR: [BalanceScalarWhereInput!]
  NOT: [BalanceScalarWhereInput!]
}

input BalanceUpdateManyDataInput {
  currency: String
  platform: String
  amount: Float
}

input BalanceUpdateManyInput {
  create: [BalanceCreateInput!]
  deleteMany: [BalanceScalarWhereInput!]
  updateMany: [BalanceUpdateManyWithWhereNestedInput!]
}

input BalanceUpdateManyWithWhereNestedInput {
  where: BalanceScalarWhereInput!
  data: BalanceUpdateManyDataInput!
}

input BalanceWhereInput {
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  platform: String
  platform_not: String
  platform_in: [String!]
  platform_not_in: [String!]
  platform_lt: String
  platform_lte: String
  platform_gt: String
  platform_gte: String
  platform_contains: String
  platform_not_contains: String
  platform_starts_with: String
  platform_not_starts_with: String
  platform_ends_with: String
  platform_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  AND: [BalanceWhereInput!]
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  balances: [Balance!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  balances: BalanceCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  balances: BalanceUpdateManyInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  balances_some: BalanceWhereInput
  balances_every: BalanceRestrictedWhereInput
  balances_none: BalanceRestrictedWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`
      }
    