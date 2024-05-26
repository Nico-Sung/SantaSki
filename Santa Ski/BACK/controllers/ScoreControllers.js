// controllers/scoreController.js
import prisma from "../config/prisma.js";

class ScoreController {
    async create(req, res) {
        const { pseudo, score } = req.body;

        const existingScore = await prisma.score.findFirst({
            where: { pseudo },
        });

        if (existingScore) {
            const updatedScore = await prisma.score.update({
                where: { id: existingScore.id },
                data: { score },
            });

            res.json(updatedScore);
        } else {
            const newScore = await prisma.score.create({
                data: { pseudo, score },
            });

            res.json(newScore);
        }
    }

    async getAll(req, res) {
        const scores = await prisma.score.findMany({
            orderBy: {
                score: "desc",
            },
        });
        res.json(scores);
    }

    async update(req, res) {
        const { pseudo, score } = req.body;

        const existingScore = await prisma.score.findFirst({
            where: { pseudo },
        });

        if (!existingScore) {
            return res.status(404).json({ error: "Score not found" });
        }

        const updatedScore = await prisma.score.update({
            where: { id: existingScore.id },
            data: {
                pseudo,
                score,
            },
        });

        res.json(updatedScore);
    }

    async delete(req, res) {
        const { pseudo } = req.params;

        const existingScore = await prisma.score.findFirst({
            where: { pseudo },
        });

        if (!existingScore) {
            return res.status(404).json({ error: "Score not found" });
        }

        const deletedScore = await prisma.score.delete({
            where: { id: existingScore.id },
        });

        res.json(deletedScore);
    }
}

export default new ScoreController();
