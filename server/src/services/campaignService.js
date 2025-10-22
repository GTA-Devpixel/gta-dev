import { query } from "../utils/db.js";

export const getAllCampaigns = async () => {
  return await query(`
    SELECT c.*, g.name AS group_name, u.name AS created_by_name
    FROM campaigns c
    LEFT JOIN \`groups\` g ON c.group_id = g.id
    LEFT JOIN users u ON c.created_by = u.id
    ORDER BY c.start_ts DESC
  `);
};

export const getCampaignById = async (id) => {
  const rows = await query("SELECT * FROM campaigns WHERE id=?", [id]);
  return rows[0];
};

export const createCampaign = async (data) => {
  const {
    id,
    group_id,
    title,
    description,
    goal_amount_cents,
    raised_amount_cents,
    cover_url,
    status,
    start_ts,
    end_ts,
    created_by,
  } = data;
  await query(
    `INSERT INTO campaigns
     (id, group_id, title, description, goal_amount_cents, raised_amount_cents, cover_url, status, start_ts, end_ts, created_by)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      group_id,
      title,
      description,
      goal_amount_cents,
      raised_amount_cents,
      cover_url,
      status,
      start_ts,
      end_ts,
      created_by,
    ]
  );
  return { message: "Campaign created successfully" };
};

export const updateCampaign = async (id, data) => {
  const { title, description, goal_amount_cents, raised_amount_cents, cover_url, status } = data;
  await query(
    `UPDATE campaigns
     SET title=?, description=?, goal_amount_cents=?, raised_amount_cents=?, cover_url=?, status=?
     WHERE id=?`,
    [title, description, goal_amount_cents, raised_amount_cents, cover_url, status, id]
  );
  return { message: "Campaign updated successfully" };
};

export const deleteCampaign = async (id) => {
  await query("DELETE FROM campaigns WHERE id=?", [id]);
  return { message: "Campaign deleted successfully" };
};

// Donations
export const getDonations = async (campaignId) => {
  return await query(
    `SELECT d.*, u.name AS donor_name, u.email
     FROM donations d
     JOIN users u ON d.user_id = u.id
     WHERE d.campaign_id=?`,
    [campaignId]
  );
};
