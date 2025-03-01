const employee = {
    AddressLineNumber: String,
    AddressLine2: String,
    AddressLine3: String,
    assignments: [{
        ActionCode: String,
        ActionReasonCode: String,
        ActualTerminationDate: String,
        AssignmentCategory: String,
        assignmentDFF: {type: Array},
        assignmentExtraInformation: {type: Array},
        AssignmentId: Number,
        AssignmentName: String,
        AssignmentNumber: String,
        AssignmentProjectedEndDate: String,
        AssignmentStatus: String,
        AssignmentStatusTypeId: Number,
        BusinessUnitId: Number,
        CreationDate: String,
        DefaultExpenseAccount: String,
        DepartmentId: Number,
        EffectiveEndDate: String,
        EffectiveStartDate: String,
        empreps: {type: Array},
        EndTime: String,
        Frequency: String,
        FullPartTime: String,
        GradeId: Number,
        GradeLadderId: Number,
        JobId: Number,
        LastUpdateDate: String,
        LegalEntityId: Number,
        links: {type: Array},
        LocationId: Number,
        ManagerAssignmentId: Number,
        ManagerId: Number,
    }],
    CitizenshipId: Number,
    CitizenshipLegislationCode: String,
    CitizenshipStatus: String,
    CitizenshipToDate: String,
    City: String,
    CorrespondenceLanguage: String,
    Country: String,
    CreationDate: String,
    DateOfBirth: String,
    directReports: {type: Array},
    DisplayName: String,
    DriversLicenseExpirationDate: String,
    DriversLicenseId: Number,
    DriversLicenseIssuingCountry: String,
    EffectiveStartDate: String,
    Ethnicity: String,
    FirstName: String,
    Gender: String,
    HireDate: String,
    HomeFaxAreaCode: String,
    HomeFaxCountryCode: String,
    HomeFaxExtension: String,
    HomeFaxLegislationCode: String,
    HomeFaxNumber: String,
    HomePhoneAreaCode: String,
    HomePhoneCountryCode: String,
    HomePhoneExtension: String,
    HomePhoneLegislationCode: String,
    HomePhoneNumber: String,
    Honors: String,
    LastName: String,
    LastUpdateDate: String,
    LegalEntityId: Number,
    LicenseNumber: String,
    links: {type: Array},
    MaritalStatus: String,
    MiddleName: String,
    MilitaryVetStatus: String,
    NameSuffix: String,
    NationalId: String,
    NationalIdCountry: String
};




module.exports = employee;
//module.exports.assignmentsarray = assignmentsarray;