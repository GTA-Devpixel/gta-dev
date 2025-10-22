import * as campaignService from "../services/campaignService.js";

export const getCampaigns = async (req, res) => {
  const campaigns = await campaignService.getAllCampaigns();
  res.json(campaigns);
};

export const getCampaign = async (req, res) => {
  const campaign = await campaignService.getCampaignById(req.params.id);
  campaign ? res.json(campaign) : res.status(404).json({ message: "Not found" });
};

export const createCampaign = async (req, res) => {
  const result = await campaignService.createCampaign(req.body);
  res.status(201).json(result);
};

export const updateCampaign = async (req, res) => {
  const result = await campaignService.updateCampaign(req.params.id, req.body);
  res.json(result);
};

export const deleteCampaign = async (req, res) => {
  const result = await campaignService.deleteCampaign(req.params.id);
  res.json(result);
};

export const getDonations = async (req, res) => {
  const donations = await campaignService.getDonations(req.params.id);
  res.json(donations);
};
