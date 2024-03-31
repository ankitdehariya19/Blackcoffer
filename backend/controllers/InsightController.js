import Insight from "../models/Insight.js";
import fs from 'fs/promises';

export const getAlldatas = async (req, res, next) => {
  try {
    const datas = await Insight.find();
    res.status(200).json(datas);
  } catch (error) {
    next(error);
  }
};

export const createdata = async (req, res, next) => {
  try {
    const newInsight = await Insight.create(req.body);
    res.status(201).json(newInsight);
  } catch (error) {
    next(error);
  }
};

export const getdataById = async (req, res, next) => {
  try {
    const data = await Insight.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};


// export const importDataFromJson = async (req, res, next) => {
//   try {
//     const filePath = 'data.json';
//     const jsonData = await fs.readFile(filePath, 'utf8'); 
//     const parsedData = JSON.parse(jsonData);
//     const batchSize = 100; 
//     const totalRecords = parsedData.length;
//     const totalBatches = Math.ceil(totalRecords / batchSize);

//     let insertedCount = 0;
//     for (let i = 0; i < totalBatches; i++) {
//       const batchStart = i * batchSize;
//       const batchEnd = Math.min((i + 1) * batchSize, totalRecords);
//       const batchData = parsedData.slice(batchStart, batchEnd);
      
//       const result = await Insight.insertMany(batchData);
//       insertedCount += result.length;
//     }
//     res.status(200);
//   } catch (error) {
//     next(error);
//   }
// };
