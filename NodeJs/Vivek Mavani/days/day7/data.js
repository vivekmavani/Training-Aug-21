
const assignmentsarray = [{
    ActionCode: "string",
    ActionReasonCode: "string",
    ActualTerminationDate: "12/12/2021",
    AssignmentCategory: "string",
    assignmentDFF: ['a', 'b', 'c'],
    assignmentExtraInformation: ['a', 'b', 'c'],
    AssignmentId: 1,
    AssignmentName: "string",
    AssignmentNumber: "string",
    AssignmentProjectedEndDate: "12/12/2022",
    AssignmentStatus: "string",
    AssignmentStatusTypeId: 1,
    BusinessUnitId: 1,
    CreationDate: "12/12/2021",
    DefaultExpenseAccount: "string",
    DepartmentId: 1,
    EffectiveEndDate: "12/12/2021",
    EffectiveStartDate: "12/12/2021",
    empreps: [1, 2, 3],
    EndTime: "string",
    Frequency: "string",
    FullPartTime: "string",
    GradeId: 1,
    GradeLadderId: 1,
    JobId: 1,
    LastUpdateDate: "12/12/2021",
    LegalEntityId: 1,
    links: ["link1"],
    LocationId: 1,
    ManagerAssignmentId: 1,
    ManagerId: 1,
}];

const employee = [{
    AddressLine1: "parimal chowk",
    AddressLine2: "waghavadi road",
    AddressLine3: "",
    assignments: assignmentsarray,
    CitizenshipId: 1,
    CitizenshipLegislationCode: "CitizenshipLegislationCode",
    CitizenshipStatus: "CitizenshipStatus",
    CitizenshipToDate: "12/12/2020",
    City: "bhavnagar",
    CorrespondenceLanguage: "guj",
    Country: "india",
    CreationDate: "12/12/2020",
    DateOfBirth: "12/12/1999",
    directReports: [],
    DisplayName: "vivek mavani",
    DriversLicenseExpirationDate: "12/12/2021",
    DriversLicenseId: 1,
    DriversLicenseIssuingCountry: "india",
    EffectiveStartDate: "12/12/2021",
    Ethnicity: "Ethnicity",
    FirstName: "vivek",
    Gender: "male",
    HireDate: "12/12/2021",
    HomeFaxAreaCode: "HomeFaxAreaCode",
    HomeFaxCountryCode: "91",
    HomeFaxExtension: "HomeFaxExtension",
    HomeFaxLegislationCode: "HomeFaxLegislationCode",
    HomeFaxNumber: "HomeFaxNumber",
    HomePhoneAreaCode: "HomePhoneAreaCode",
    HomePhoneCountryCode: "91",
    HomePhoneExtension: "HomePhoneExtension",
    HomePhoneLegislationCode: "HomePhoneLegislationCode",
    HomePhoneNumber: "string",
    Honors: "string",
    LastName: "string",
    LastUpdateDate: "string",
    LegalEntityId: 1,
    LicenseNumber: "string",
    links: ['link1', "link2"],
    MaritalStatus: "string",
    MiddleName: "string",
    MilitaryVetStatus: "string",
    NameSuffix: "string",
    NationalId: "string",
    NationalIdCountry: "string"
}];




module.exports.employee = employee;
//module.exports.assignmentsarray = assignmentsarray;