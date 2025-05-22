const express = require('express')
const router = express.Router()

let reservas = []
let idActual = 1

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         cliente:
 *           type: string
 *         telefono:
 *           type: string
 *         fechaHora:
 *           type: string
 *         mesa:
 *           type: string
 */

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     responses:
 *       200:
 *         description: Lista de reservas
 */
router.get('/', (req, res) => {
  res.json(reservas)
})

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada
 */
router.post('/', (req, res) => {
  const reserva = { id: idActual++, ...req.body }
  reservas.push(reserva)
  res.status(201).json(reserva)
})

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva actualizada
 */
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = reservas.findIndex(r => r.id === id)
  if (index !== -1) {
    reservas[index] = { id, ...req.body }
    res.json(reservas[index])
  } else {
    res.status(404).send('Reserva no encontrada')
  }
})

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada
 */
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  reservas = reservas.filter(r => r.id !== id)
  res.send('Reserva eliminada')
})

module.exports = router

router.post('/', (req, res) => {
  const { cliente, telefono, fechaHora, mesa } = req.body;

  if (!cliente || !telefono || !fechaHora || !mesa) {
    return res.status(400).json({ mensaje: 'Faltan datos en la reserva' });
  }

  const nuevaReserva = {
    id: idActual++,
    cliente,
    telefono,
    fechaHora,
    mesa
  };

  reservas.push(nuevaReserva);
  res.status(201).json(nuevaReserva);
});

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva creada
 */

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const reserva = reservas.find(r => r.id === id);

  if (!reserva) {
    return res.status(404).json({ mensaje: 'Reserva no encontrada' });
  }

  res.json(reserva);
});


