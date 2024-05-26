import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createDonation(req, res) {
    const { amount, donorName } = req.body;

    const donation = await prisma.donation.create({
        data: {
            amount: parseFloat(amount),
            donorName: donorName,
        },
    });

    res.json(donation);
    console.log(req.body);
}

export async function getTotalDonations(req, res) {
    const total = await prisma.donation.aggregate({
        _sum: {
            amount: true,
        },
    });

    res.json({ totalDonations: total._sum.amount });
}

export async function getLastDonation(req, res) {
    try {
        const lastDonation = await prisma.donation.findFirst({
            orderBy: {
                createdAt: "desc",
            },
        });

        res.json(lastDonation);
    } catch (error) {
        res.status(500).json({
            error: "Une erreur est survenue lors de la récupération du dernier donateur",
        });
    }
}
// export default new DonationController();
