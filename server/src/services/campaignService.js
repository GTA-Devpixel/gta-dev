// src/services/campaignService.js
// Using mock static data (no DB calls)

const mockCampaigns = [
  {
    id: "cmp11111-1111-1111-1111-111111111111",
    group_id: "eeee5555-eeee-eeee-eeee-eeeeeeeeeeee",
    group_name: "Karimnagar Food Drive",
    created_by: "22222222-2222-2222-2222-222222222222",
    created_by_name: "Priya R",
    title: "Meals for Schools",
    description: "Provide mid-day meals for underprivileged children.",
    goal_amount_cents: 500000,
    raised_amount_cents: 120000,
    cover_url: "https://picsum.photos/seed/c1/800/300",
    status: "live",
    start_ts: "2025-10-10 00:00:00",
    end_ts: "2026-01-10 23:59:59",
  },
  {
    id: "cmp22222-2222-2222-2222-222222222222",
    group_id: "bbbb2222-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
    group_name: "Warangal Arts",
    created_by: "33333333-3333-3333-3333-333333333333",
    created_by_name: "Arjun M",
    title: "Artist Grants",
    description: "Support local artists in Telangana.",
    goal_amount_cents: 300000,
    raised_amount_cents: 50000,
    cover_url: "https://picsum.photos/seed/c2/800/300",
    status: "live",
    start_ts: "2025-10-05 00:00:00",
    end_ts: "2025-12-31 23:59:59",
  },
  {
    id: "cmp33333-3333-3333-3333-333333333333",
    group_id: "aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    group_name: "Hyderabad Runners",
    created_by: "11111111-1111-1111-1111-111111111111",
    created_by_name: "Sai Kumar",
    title: "Community Health Camp",
    description: "Free health checkups for rural communities.",
    goal_amount_cents: 400000,
    raised_amount_cents: 0,
    cover_url: "https://picsum.photos/seed/c3/800/300",
    status: "draft",
    start_ts: "2025-11-01 00:00:00",
    end_ts: "2026-01-31 23:59:59",
  },
  {
    id: "cmp44444-4444-4444-4444-444444444444",
    group_id: "dddd4444-dddd-dddd-dddd-dddddddddddd",
    group_name: "Khammam Tech Circle",
    created_by: "55555555-5555-5555-5555-555555555555",
    created_by_name: "Rahul T",
    title: "STEM Kits for Kids",
    description: "Delivering STEM education kits to 1000+ kids.",
    goal_amount_cents: 250000,
    raised_amount_cents: 0,
    cover_url: "https://picsum.photos/seed/c4/800/300",
    status: "paused",
    start_ts: "2025-10-20 00:00:00",
    end_ts: "2026-02-10 23:59:59",
  },
  {
    id: "cmp55555-5555-5555-5555-555555555555",
    group_id: "eeee5555-eeee-eeee-eeee-eeeeeeeeeeee",
    group_name: "Karimnagar Food Drive",
    created_by: "22222222-2222-2222-2222-222222222222",
    created_by_name: "Priya R",
    title: "Winter Blankets Drive",
    description: "Distribute warm blankets to 500 families.",
    goal_amount_cents: 200000,
    raised_amount_cents: 75000,
    cover_url: "https://picsum.photos/seed/c5/800/300",
    status: "live",
    start_ts: "2025-10-01 00:00:00",
    end_ts: "2025-12-15 23:59:59",
  },
];

const mockDonations = [
  {
    id: "don11111-1111-1111-1111-111111111111",
    campaign_id: "cmp11111-1111-1111-1111-111111111111",
    user_id: "11111111-1111-1111-1111-111111111111",
    donor_name: "Sai Kumar",
    email: "sai@gta.org",
    amount_cents: 50000,
    status: "succeeded",
  },
  {
    id: "don22222-2222-2222-2222-222222222222",
    campaign_id: "cmp11111-1111-1111-1111-111111111111",
    user_id: "22222222-2222-2222-2222-222222222222",
    donor_name: "Priya R",
    email: "priya@gta.org",
    amount_cents: 25000,
    status: "succeeded",
  },
  {
    id: "don44444-4444-4444-4444-444444444444",
    campaign_id: "cmp55555-5555-5555-5555-555555555555",
    user_id: "44444444-4444-4444-4444-444444444444",
    donor_name: "Keerthi S",
    email: "keerthi@gta.org",
    amount_cents: 15000,
    status: "succeeded",
  },
  {
    id: "don55555-5555-5555-5555-555555555555",
    campaign_id: "cmp55555-5555-5555-5555-555555555555",
    user_id: "55555555-5555-5555-5555-555555555555",
    donor_name: "Rahul T",
    email: "rahul@gta.org",
    amount_cents: 5000,
    status: "failed",
  },
];

// -----------------------------
// Mocked service functions
// -----------------------------

export const getAllCampaigns = async () => {
  // Sort by start date (latest first)
  return mockCampaigns.sort((a, b) => new Date(b.start_ts) - new Date(a.start_ts));
};

export const getCampaignById = async (id) => {
  return mockCampaigns.find((c) => c.id === id);
};

export const createCampaign = async (data) => {
  mockCampaigns.push(data);
  return { message: "Campaign created successfully (mock)", campaign: data };
};

export const updateCampaign = async (id, data) => {
  const index = mockCampaigns.findIndex((c) => c.id === id);
  if (index === -1) return { message: "Campaign not found" };
  mockCampaigns[index] = { ...mockCampaigns[index], ...data };
  return { message: "Campaign updated successfully (mock)", campaign: mockCampaigns[index] };
};

export const deleteCampaign = async (id) => {
  const index = mockCampaigns.findIndex((c) => c.id === id);
  if (index === -1) return { message: "Campaign not found" };
  mockCampaigns.splice(index, 1);
  return { message: "Campaign deleted successfully (mock)" };
};

// Donations
export const getDonations = async (campaignId) => {
  return mockDonations.filter((d) => d.campaign_id === campaignId);
};
