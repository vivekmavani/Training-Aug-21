const Joi = require('joi');
var validations = {
    employee: function validateAsync(employee) {
        const shema = {
            AddressLine1: Joi.string().allow(''),
            AddressLine2: Joi.string().allow(''),
            AddressLine3: Joi.string().allow(''),
            CitizenshipId: Joi.string().allow(''),
            CitizenshipLegislationCode: Joi.number().integer().allow(0),
            CitizenshipStatus: Joi.string().allow(''),
            CitizenshipToDate: Joi.string().allow(''),
            City: Joi.string().allow(''),
            CorrespondenceLanguage: Joi.string().allow(''),
            Country: Joi.string().allow(''),
            CreationDate: Joi.string().allow(''),
            DateOfBirth: Joi.string().allow(''),
            DisplayName: Joi.string().allow(''),
            DriversLicenseExpirationDate: Joi.string().allow(''),
            DriversLicenseIssuingCountry: Joi.string().allow(''),
            EffectiveStartDate: Joi.string().allow(''),
            Ethnicity: Joi.string().allow(''),
            FirstName: Joi.string().allow(''),
            Gender: Joi.string().allow(''),
            HireDate: Joi.string().allow(''),
            HomeFaxAreaCode: Joi.string().allow(''),
            HomeFaxCountryCode: Joi.string().allow(''),
            HomeFaxExtension: Joi.string().allow(''),
            HomeFaxLegislationCode: Joi.string().allow(''),
            HomeFaxNumber: Joi.string().allow(''),
            HomePhoneAreaCode: Joi.string().allow(''),
            HomePhoneCountryCode: Joi.string().allow(''),
            HomePhoneExtension: Joi.string().allow(''),
            HomePhoneLegislationCode: Joi.string().allow(''),
            HomePhoneNumber: Joi.string().allow(''),
            Honors: Joi.string().allow(''),
            LastName: Joi.string().allow(''),
            LastUpdateDate: Joi.string().allow(''),
            LicenseNumber: Joi.string().allow(''),
            links: Joi.string().allow(''),
            MaritalStatus: Joi.string().allow(''),
            MiddleName: Joi.string().allow(''),
            MilitaryVetStatus: Joi.string().allow(''),
            NameSuffix: Joi.string().allow(''),
            NationalId: Joi.string().allow(''),
            NationalIdCountry: Joi.string().allow(''),
        };
        return Joi.validate(employee, shema);
    },
    assignment: function validateAsync(assignments) {
        const shema = {
            ActionCode: Joi.string().allow(''),
            ActionReasonCode: Joi.string().allow(''),
            ActualTerminationDate: Joi.string().allow(''),
            AssignmentCategory: Joi.string().allow(''),
            assignmentDFF: Joi.array().items(Joi.string()),
            assignmentExtraInformation: Joi.array().items(Joi.string()),
            AssignmentId: Joi.number().integer().allow(0),
            AssignmentName: Joi.string().allow(''),
            AssignmentNumber: Joi.string().allow(''),
            AssignmentProjectedEndDate: Joi.string().allow(''),
            AssignmentStatus: Joi.string().allow(''),
            AssignmentStatusTypeId: Joi.number().integer().allow(0),
            BusinessUnitId: Joi.number().integer().allow(0),
            CreationDate: Joi.string().allow(''),
            DefaultExpenseAccount: Joi.string().allow(''),
            DepartmentId: Joi.number().integer().allow(0),
            EffectiveEndDate: Joi.string().allow(''),
            EffectiveStartDate: Joi.string().allow(''),
            empreps: Joi.array().items(Joi.string()),
            EndTime: Joi.string().allow(''),
            Frequency: Joi.string().allow(''),
            FullPartTime: Joi.string().allow(''),
            GradeId: Joi.number().integer().allow(0),
            GradeLadderId: Joi.number().integer().allow(0),
            JobId: Joi.number().integer().allow(0),
            LastUpdateDate: Joi.string().allow(''),
            LegalEntityId: Joi.number().integer().allow(0),
            links: Joi.array().items(Joi.string()),
            LocationId: Joi.number().integer().allow(0),
            ManagerAssignmentId: Joi.number().integer().allow(0),
            ManagerId: Joi.number().integer().allow(0),
        };
        return Joi.validate(assignments, shema);
    }

}

module.exports = validations



//  return Joi.validate(employee,shema);