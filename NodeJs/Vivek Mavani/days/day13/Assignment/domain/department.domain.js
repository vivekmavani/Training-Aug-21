const DepartmentModel = require("../models/department.model");

class DepartmentDomain {
    //To get all department
    async getAllDepartments(req, res) {
        const department = await DepartmentModel.find();
        res.send(department);
    }
    //To get department
    async getDepartment(req, res) {
        let id = req.params.DepId;
        const department = await DepartmentModel.findById(id);
        if (department) {
            res.send(department);
        } else {
            res.status(404).send("Department Not Found");
        }
    }
    //To Insert department
    async insertDepartment(req, res) {
        //getting user input
        let data = req.body;

        const department = new DepartmentModel(data);
        try {
            const result = await department.save();
            res.send(result);
        } catch (e) {
            res.send(e.message);
        }
    }
    //To delete a department
    async deleteDepartment(req, res) {
        let id = req.params.DepId;
        const department = await DepartmentModel.findByIdAndRemove(id);
        if (department) {
            res.send("Department Record Deleted Successfully");
        } else {
            res.status(404).send("Data Not Found");
        }
    }

    //To delete a assistant in department
    async deleteDepartmentAssistant(req, res) {
        let DepId = req.params.DepId;
        let id = req.body._id;
        if (!id) return res.status(404).send('The Assistant id is required');
        const department = await DepartmentModel.updateOne({ _id: DepId }, { $pullAll: { healthcareassistant: [id] } })
        res.send(department);
    }

    //To delete a doctor in department
    async deleteDepartmentDoctor(req, res) {
        let DepId = req.params.DepId;
        let id = req.body._id;
        if (!id) return res.status(404).send('The doctor id is required');
        const department = await DepartmentModel.updateOne({ _id: DepId }, { $pullAll: { doctor: [id] } })
        res.send(department);
    }

    //To insert doctos in department
    async insertDoctorsInDepartment(req, res) {
        let DepId = req.params.DepId;
        let id = req.body._id;
        if (!id) return res.status(404).send('The doctor id is required');

        const department = await DepartmentModel.find();
        let isAvail = department.find((e) => e._id == DepId);

        if (isAvail) {
            const doctorsid = department[0].doctor.filter(e => e == id);
            if (doctorsid.length != 0) return res.status(404).send('doctor already added');
            try {
                const result = await DepartmentModel.findByIdAndUpdate(
                    DepId,
                    {
                        $push: { doctor: id },
                    },
                    { new: true }
                );
                res.send(result);
            } catch (e) {
                res.send(e.message);
            }
        } else {
            res.status(404).send("Department Not Found");
        }
    }

    //To insert Assistant in department
    async insertAssistantInDepartment(req, res) {
        let DepId = req.params.DepId;
        let id = req.body._id;
        if (!id) return res.status(404).send('The Assistant id is required');

        const department = await DepartmentModel.find();
        let isAvail = department.find((e) => e._id == DepId);

        if (isAvail) {
            const assistantid = department[0].healthcareassistant.filter(e => e == id);
            if (assistantid.length != 0) return res.status(404).send('Assistant already added');
            try {
                const result = await DepartmentModel.findByIdAndUpdate(
                    DepId,
                    {
                        $push: { healthcareassistant: id },
                    },
                    { new: true }
                );
                res.send(result);
            } catch (e) {
                res.send(e.message);
            }
        } else {
            res.status(404).send("Department Not Found");
        }
    }
}

module.exports = DepartmentDomain;
