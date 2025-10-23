// src/services/userService.js
// Mock static data version for local / frontend testing

// ----------------------
// MOCK USERS
// ----------------------

const mockUsers = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    email: "sai@gta.org",
    phone: "+919876500001",
    password_hash: "$2y$hash1",
    auth_provider: "firebase",
    status: "active",
    created_at: "2025-10-01T10:00:00Z",
    last_login_at: "2025-10-20T07:00:00Z",
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    email: "priya@gta.org",
    phone: "+919876500002",
    password_hash: "$2y$hash2",
    auth_provider: "firebase",
    status: "active",
    created_at: "2025-10-02T10:00:00Z",
    last_login_at: "2025-10-20T08:00:00Z",
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    email: "arjun@gta.org",
    phone: "+919876500003",
    password_hash: "$2y$hash3",
    auth_provider: "firebase",
    status: "active",
    created_at: "2025-10-03T09:30:00Z",
    last_login_at: "2025-10-18T07:30:00Z",
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    email: "keerthi@gta.org",
    phone: "+919876500004",
    password_hash: "$2y$hash4",
    auth_provider: "firebase",
    status: "active",
    created_at: "2025-10-04T11:00:00Z",
    last_login_at: "2025-10-20T09:00:00Z",
  },
  {
    id: "55555555-5555-5555-5555-555555555555",
    email: "rahul@gta.org",
    phone: "+919876500005",
    password_hash: "$2y$hash5",
    auth_provider: "firebase",
    status: "inactive",
    created_at: "2025-10-05T08:00:00Z",
    last_login_at: null,
  },
  {
    id: "66666666-6666-6666-6666-666666666666",
    email: "admin@gta.org",
    phone: "+919876500006",
    password_hash: "$2y$hash6",
    auth_provider: "firebase",
    status: "active",
    created_at: "2025-10-01T07:00:00Z",
    last_login_at: "2025-10-22T10:00:00Z",
  },
];

// ----------------------
// MOCK SERVICE FUNCTIONS
// ----------------------

export const getAllUsers = async () => {
  return mockUsers;
};

export const getUserById = async (id) => {
  return mockUsers.find((u) => u.id === id);
};

export const createUser = async (data) => {
  const newUser = {
    id: data.id,
    email: data.email,
    phone: data.phone,
    password_hash: data.password_hash || "",
    auth_provider: data.auth_provider || "manual",
    status: data.status || "active",
    created_at: new Date().toISOString(),
    last_login_at: null,
  };
  mockUsers.push(newUser);
  return { message: "User created successfully (mock)", user: newUser };
};

export const updateUser = async (id, data) => {
  const index = mockUsers.findIndex((u) => u.id === id);
  if (index === -1) return { message: "User not found" };
  mockUsers[index] = { ...mockUsers[index], ...data };
  return { message: "User updated successfully (mock)", user: mockUsers[index] };
};

export const deleteUser = async (id) => {
  const index = mockUsers.findIndex((u) => u.id === id);
  if (index === -1) return { message: "User not found" };
  mockUsers.splice(index, 1);
  return { message: "User deleted successfully (mock)" };
};
