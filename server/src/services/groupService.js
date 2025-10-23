// src/services/groupService.js
// Static data — simulating SQL responses for frontend testing

// ----------------------
// MOCK DATA
// ----------------------

const mockGroups = [
  {
    id: "aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    name: "Hyderabad Runners",
    slug: "hyderabad-runners",
    description: "Weekly runs & fitness group in Hyderabad.",
    visibility: "public",
    cover_url: "https://picsum.photos/seed/gr1/800/300",
    city: "Hyderabad",
    category: "Fitness",
    created_by: "66666666-6666-6666-6666-666666666666",
    created_at: "2025-10-01T09:00:00",
  },
  {
    id: "bbbb2222-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
    name: "Warangal Arts",
    slug: "warangal-arts",
    description: "Culture & arts community promoting local artists.",
    visibility: "public",
    cover_url: "https://picsum.photos/seed/gr2/800/300",
    city: "Warangal",
    category: "Culture",
    created_by: "66666666-6666-6666-6666-666666666666",
    created_at: "2025-09-15T12:00:00",
  },
  {
    id: "cccc3333-cccc-cccc-cccc-cccccccccccc",
    name: "Nizamabad Volunteers",
    slug: "nizamabad-volunteers",
    description: "Private volunteering group for city development.",
    visibility: "private",
    cover_url: "https://picsum.photos/seed/gr3/800/300",
    city: "Nizamabad",
    category: "Community",
    created_by: "66666666-6666-6666-6666-666666666666",
    created_at: "2025-08-22T15:00:00",
  },
  {
    id: "dddd4444-dddd-dddd-dddd-dddddddddddd",
    name: "Khammam Tech Circle",
    slug: "khammam-tech",
    description: "Technology meetups & workshops for developers.",
    visibility: "public",
    cover_url: "https://picsum.photos/seed/gr4/800/300",
    city: "Khammam",
    category: "Technology",
    created_by: "66666666-6666-6666-6666-666666666666",
    created_at: "2025-07-20T10:00:00",
  },
  {
    id: "eeee5555-eeee-eeee-eeee-eeeeeeeeeeee",
    name: "Karimnagar Food Drive",
    slug: "karimnagar-food",
    description: "Food donation drives across Karimnagar region.",
    visibility: "public",
    cover_url: "https://picsum.photos/seed/gr5/800/300",
    city: "Karimnagar",
    category: "Charity",
    created_by: "66666666-6666-6666-6666-666666666666",
    created_at: "2025-06-05T11:00:00",
  },
];

const mockMembers = [
  {
    group_id: "aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    user_id: "11111111-1111-1111-1111-111111111111",
    role: "member",
    status: "active",
    email: "sai@gta.org",
  },
  {
    group_id: "aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    user_id: "22222222-2222-2222-2222-222222222222",
    role: "moderator",
    status: "active",
    email: "priya@gta.org",
  },
  {
    group_id: "cccc3333-cccc-cccc-cccc-cccccccccccc",
    user_id: "44444444-4444-4444-4444-444444444444",
    role: "admin",
    status: "active",
    email: "keerthi@gta.org",
  },
  {
    group_id: "dddd4444-dddd-dddd-dddd-dddddddddddd",
    user_id: "55555555-5555-5555-5555-555555555555",
    role: "member",
    status: "active",
    email: "rahul@gta.org",
  },
];

const mockJoinRequests = [
  {
    id: 1,
    group_id: "cccc3333-cccc-cccc-cccc-cccccccccccc",
    user_id: "33333333-3333-3333-3333-333333333333",
    message: "I'd love to volunteer!",
    status: "pending",
    decided_by: null,
    decided_at: null,
  },
  {
    id: 2,
    group_id: "cccc3333-cccc-cccc-cccc-cccccccccccc",
    user_id: "11111111-1111-1111-1111-111111111111",
    message: "I can help manage events.",
    status: "approved",
    decided_by: "44444444-4444-4444-4444-444444444444",
    decided_at: "2025-10-15T10:30:00",
  },
];

// ----------------------
// MOCK FUNCTIONS
// ----------------------

// Get all groups (optionally filter by city/category)
export const getAllGroups = async (filters = {}) => {
  const { city, category } = filters;
  let groups = [...mockGroups];

  if (city) {
    groups = groups.filter((g) => g.city.toLowerCase() === city.toLowerCase());
  }
  if (category) {
    groups = groups.filter((g) => g.category.toLowerCase() === category.toLowerCase());
  }

  return groups;
};

// Get single group by ID
export const getGroupById = async (id) => {
  return mockGroups.find((g) => g.id === id);
};

// Create new group
export const createGroup = async (data) => {
  mockGroups.push(data);
  return { message: "Group created successfully (mock)", group: data };
};

// Update existing group
export const updateGroup = async (id, data) => {
  const index = mockGroups.findIndex((g) => g.id === id);
  if (index === -1) return { message: "Group not found" };
  mockGroups[index] = { ...mockGroups[index], ...data };
  return { message: "Group updated successfully (mock)", group: mockGroups[index] };
};

// Delete group
export const deleteGroup = async (id) => {
  const index = mockGroups.findIndex((g) => g.id === id);
  if (index === -1) return { message: "Group not found" };
  mockGroups.splice(index, 1);
  return { message: "Group deleted successfully (mock)" };
};

// MEMBERSHIPS
export const getGroupMembers = async (groupId) => {
  return mockMembers.filter((m) => m.group_id === groupId);
};

export const addGroupMember = async (groupId, userId, role = "member") => {
  mockMembers.push({
    group_id: groupId,
    user_id: userId,
    role,
    status: "active",
    email: "newuser@gta.org",
  });
  return { message: "Member added successfully (mock)" };
};

export const removeGroupMember = async (groupId, userId) => {
  const index = mockMembers.findIndex(
    (m) => m.group_id === groupId && m.user_id === userId
  );
  if (index !== -1) mockMembers.splice(index, 1);
  return { message: "Member removed successfully (mock)" };
};

// JOIN REQUESTS
export const createJoinRequest = async (groupId, userId, message) => {
  mockJoinRequests.push({
    id: mockJoinRequests.length + 1,
    group_id: groupId,
    user_id: userId,
    message,
    status: "pending",
    decided_by: null,
    decided_at: null,
  });
  return { message: "Join request submitted (mock)" };
};

export const updateJoinRequest = async (id, status, decidedBy) => {
  const index = mockJoinRequests.findIndex((r) => r.id === Number(id));
  if (index === -1) return { message: "Join request not found" };
  mockJoinRequests[index] = {
    ...mockJoinRequests[index],
    status,
    decided_by: decidedBy,
    decided_at: new Date().toISOString(),
  };
  return { message: `Join request ${status} (mock)` };
};
