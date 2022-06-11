const { PrismaClient } = require('@prisma/client')
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient()

exports.getAll = async (req, res) => {
  const devices = await prisma.devices.findMany()
  res.json(devices)
}
exports.getById = async (req, res) => {
  const id = parseInt(req.params.id)
  const device = await prisma.devices.findUnique({
    where: {
      id,
    },
  })
  res.json(device)
}

exports.create = async (req, res) => {
  const { name, category_id } = req.body
  const device = await prisma.devices.create({
    data: {
      name,
      category_id
    }
  })
  res.json(device)
}
exports.update = async (req, res) => {
  const id = parseInt(req.params.id)
  const { name, category_id } = req.body
  const device = await prisma.devices.update({
    where: {
      id,
    },
    data: {
      name,
      category_id
    }
  })
  res.json(device)
}
exports.delete = async (req, res) => {
  const id = parseInt(req.params.id)
  const device = await prisma.devices.delete({
    where: {
      id,
    },
  })
  res.json(device)
}
