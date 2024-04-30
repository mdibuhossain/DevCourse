export class CourseController {
    static async getAllCourses(req, res) {
        try {
            const courses = await prisma.course.findMany();
            return res.status(200).json(courses);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async getCourse(req, res) {
        try {
            const course = await prisma.course.findUnique({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(200).json(course);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async createCourse(req, res) {
        const payload = req.body;
        try {
            const course = await prisma.course.create({
                data: {
                    title: payload.title,
                    description: payload.description,
                    price: payload.price,
                    img: payload.img,
                    isCouponAvailable: payload.isCouponAvailable,
                    isVisible: false || payload.isVisible,
                },
            });
            return res.status(201).json(course);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async updateCourse(req, res) {
        const payload = req.body;
        try {
            const course = await prisma.course.update({
                where: {
                    id: parseInt(req.params.id),
                },
                data: {
                    title: payload.title,
                    description: payload.description,
                    price: payload.price,
                    img: payload.img,
                    isCouponAvailable: payload.isCouponAvailable,
                    isVisible: payload.isVisible,
                },
            });
            return res.status(200).json(course);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    static async deleteCourse(req, res) {
        try {
            await prisma.course.delete({
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}