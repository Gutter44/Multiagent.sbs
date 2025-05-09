U.S. General Services Administration Search Data APIs Code

SAM.gov Get Opportunities Public API
Overview
Getting Started
Version Control - v2
Authentication and API Keys
User Account API Key Creation
Get Opportunities Request Parameters
Get Opportunities Response Parameters
Set-Aside Values
Examples
Example 1: Search by award type
Example 2: Updated v2 Endpoint with FH Information
OpenAPI Specification File
HTTP Response Codes
Error Messages
FAQ
Contact Us
Change Log
Overview
Get Opportunities API provides all the published opportunity details based on the request parameters. This API requires pagination, and the response will be provided to users synchronously.

This API only provides the latest active version of the opportunity. To view all version of the opportunity, please visit Data Services Section of SAM.gov. All active notices in SAM.gov are updated daily and all archived notices are updated on a weekly basis.

Active Opportunities

Archived Opportunities

Getting Started
Get Opportunities API can be accessed from Production or Alpha via the following environments:

Version Control - v2
Production:
https://api.sam.gov/opportunities/v2/search
Alpha:
https://api-alpha.sam.gov/opportunities/v2/search
Authentication and API Keys
User of this public API must provide an API key to use this Opportunities public API. Request per day are limited based on the federal or non-federal or general roles. Note: User can request a public API Key in the Account Details page on SAM.gov (if testing in production) Else on alpha.sam.gov (if testing in prodlike).

User Account API Key Creation
Registered user can request for a public API on ‘Account Details’ page. This page can be accessed on Account Details page on SAM.gov
User must enter account password on ‘Account Details’ page to view the API Key information. If an incorrect password is entered, an error will be returned.
After the API Key is generated on ‘Account Details’ page, the API Key can be viewed on the Account Details page immediately. The API Key is visible until user navigates to a different page.
If an error is encountered during the API Key generation/retrieval, then user will receive an error message and must try again.
Get Opportunities Request Parameters
Users can search by any of the below request parameters with Date field as mandatory.

Request Parameters that API accepts	Description	Required	Data Type	Applicable Versions
api_key	Public Key of users	Yes	String	v2
ptype	Procurement Type. Below are the available Procurement Types:
u= Justification (J&A)
p = Pre solicitation
a = Award Notice
r = Sources Sought
s = Special Notice
o = Solicitation
g = Sale of Surplus Property
k = Combined Synopsis/Solicitation
i = Intent to Bundle Requirements (DoD-Funded)

Note: Below services are now retired:
f = Foreign Government Standard
l = Fair Opportunity / Limited Sources

Use Justification (u) instead of fair Opportunity	No	String	v2
solnum	Solicitation Number	No	String	v2
noticeid	Notice ID	No	String	v2
title	Title	No	String	v2
postedFrom	Posted date From
Format must be MM/dd/yyyy
Note: Date range between Posted Date From and To is 1 year	Yes	String	v2
postedTo	Posted date To Format must be MM/dd/yyyy
Note: Date range between Posted Date From and To is 1 year	Yes	String	v2
deptname	Department Name (L1)	No	String	v2 - Deprecated
subtier	Agency Name (L2)	No	String	v2 - Deprecated
state	Place of Performance (State)	No	String	v2
status (Coming Soon)	Status of the opportunity
Accepts following: active, inactive, archived, cancelled, deleted	No	String	v2
zip	Place of Performance (Zip code)	No	String	v2
organizationCode	Code of associated organization	No	string	v2
organizationName	Name of associated organization. This Request Parameter can be used to filter the dataset by Department Name or Subtier Name
Note: General Search can be performed	No	String	v2
typeOfSetAside	Refer Set-Aside Value Section	No	String	v2
typeOfSetAsideDescription	Set Aside code Description. See above descriptions mentioned against each of the Set Aside Code	No	String	v2
ncode	NAICS Code. This code is maximum of 6 digits	No	String	v2
ccode	Classification Code	No	String	v2
rdlfrom	Response Deadline date. Format must be MM/dd/yyyy
Note: If response date From & To is provided, then the date range is 1 year	No	String	v2
rdlto	Response Deadline date. Format must be MM/dd/yyyy
Note: If response date From & To is provided, then the date range is 1 year	No	String	v2
limit	Total number of records to be retrieved per page. This field must be a number
Max Value = 1000. Default limit value is 1.	No	Int	v2
offset	Indicates the page index. Default offset starts with 0	No	Int	v2
Get Opportunities Response Parameters
Based on the request parameters, API provides below response parameters.

Request Parameters that API accepts	Description	Data Type	Applicable Versions
totalRecords	Total number of records for the search	Number	v2
limit	Limit entered by a user while making the request i.e. total number of records that user wished to retrieve per page	Number	v2
offset	Page index specified by a user. Default offset starts with 0 if user does not provide any offset in the request	Number	v2
title	Opportunity Title	String	v2
solicitationNumber	Solicitation Number	String	v2
fullParentPathName	Names of all organizations notice is associated with	String	v2
fullParentPathCode	Codes of all organizations notice is associated with	String	v2
department	Department (L1)	String	v2 - Deprecated
subtier	Sub-Tier (L2)	String	v2 - Deprecated
office	Office (L3)	String	v2 - Deprecated
postedDate	Opportunity Posted Date
YYYY-MM-DD HH:MM:SS	String	v2
type	Opportunity current type	String	v2
baseType	Opportunity original type	String	v2
archiveType	Archive Type	String	v2
archiveDate	Archived Date	String	v2
setAside	Set Aside Description	String	v2
setAsideCode	Set Aside Code	String	v2
reponseDeadLine	Response Deadline Date	String	v2
naicsCode	NAICS Code. This code is maximum of 6 digits	String	v2
classificationCode	Classification Code	String	v2
active	If Active = Yes, then the opportunity is active, if No, then opportunity is Archived	String	v2
data.award	Award Information (If Available):
Award amount
Awardee
Award date
Award Number	JSON Object	v2
data.award.number	Award Number	String	v2
data.award.amount	Award Amount	Number	v2
data.award.date	Award Date	Date and Time	v2
data.award.awardee	Name
Location
ueiSAM	JSON Object	v2
data.award.awardee.name	Awardee Name	String	v2
data.award.awardee.ueiSAM	Unique Entity Identifier SAM - Allow 12 digit value, alphanumeric
Example: ueiSAM=025114695AST	String	v2
data.award.awardee.location.
streetAddress	Awardee Street Address 1	String	v2
data.award.awardee.location.
streetAddress2	Awardee Street Address 2	String	v2
data.award.awardee.location.
city	Awardee City	JSON Object	v2
data.award.awardee.location.
city.code	Awardee City Code	String	v2
data.award.awardee.location.
city.name	Awardee City Name	String	v2
data.award.awardee.location.
state	Awardee State	JSON Object	v2
data.award.awardee.location.
state.code	Awardee State Code	String	v2
data.award.awardee.location.
state.name	Awardee State Name	String	v2
data.award.awardee.location.
country	Awardee Country	JSON Object	v2
data.award.awardee.location.
country.code	Awardee Country Code	String	v2
data.award.awardee.location.
country.name	Awardee Country Name	String	v2
data.award.awardee.location.
zip	Awardee Zip	String	v2
pointofContact	Point of Contact Information. It can have below fields if available:
Fax
Type
Email
Phone
Title
Full name	JSON Array	 
data.pointOfContact.type	Point of Contact Type	String	v2
data.pointOfContact.title	Point of Contact Title	String	v2
data.pointOfContact.fullname	Point of Contact Full Name	String	v2
data.pointOfContact.email	Point of Contact Email	String	v2
data.pointOfContact.phone	Point of Contact Phone	String	v2
data.pointOfContact.fax	Point of Contact Fax	String	v2
description	A link to an opportunity description.
Note: To download the description, user should append the public API Key. If no description is available then, user is shown an error message “ Description not found”	String	v2
data.pointOfContact.additionalInfo	Additional Information
Note: This field will only show if additional information is given	JSON Array	v2
data.pointOfContact.additionalInfo.content	Content of Additional Information
Note: This field will only show if a text is provided for additional information	String	v2
organizationType	Type of an organization – department/sub-tier/office	String	v2
officeAddress	Office Address Information. It can have below fields if available:
City
State
Zip	String	v2
data.officeAddress.city	Office Address City	String	v2
data.officeAddress.state	Office Address State	String	v2
data.officeAddress.zip	Office Address Zip	String	v2
placeOfPerformance	Place of performance information. It can have below fields if available: Street
City
State
Zip	JSON Object	v2
data.placeOfPerformance.streetAddress	Pop Address	String	v2
data.placeOfPerformance.streetAddress2	Pop Address2	String	v2
data.placeOfPerformance.city	JSON Object	Pop City	v2
data.placeOfPerformance.city.code	Pop City code	String	v2
data.placeOfPerformance.city.name	Pop City name	String	v2
data.placeOfPerformance.city.state	JSON Object	Pop City state	v2
data.placeOfPerformance.state.code	Pop city state code	String	v2
data.placeOfPerformance.state.name	Pop city state name	String	v2
data.placeOfPerformance.country	JSON Object	Pop Country	v2
data.placeOfPerformance.country.code	Pop Country Code	String	v2
data.placeOfPerformance.country.name	Pop Country name	String	v2
data.placeOfPerformance.zip	Pop Country zip	String	v2
additionalInfoLink	Any additional info link if available for the opportunity	String	v2
uiLink	Direct UI link to the opportunity. To view the opportunity on UI, user must have either a contracting officer or a Contracting Specialist role. If user hits the link without logging in, user is directed to 404 not found page	String	v2
links	Every record in a response has this links array consisting of:
rel: self
href: link to the specific opportunity itself. User should provide an API key to access the opportunity directly

Also, every response has a master links array consisting of:
rel: self
href: link to the actual request. User should provide an API key to access the request	Array	v2
resourceLinks	Direct URL to download attachments in the opportunity	Array of Strings	v2
Set-Aside Values
Several methods pertaining to submitting Contract Opportunities involve the Set-Aside Type field. Use the Set-Aside codes to submit notices.

Only one Set-Aside value is accepted in the field at this time

Refer below table for valid Set-Aside values:

Code	SetAside Values
SBA	Total Small Business Set-Aside (FAR 19.5)
SBP	Partial Small Business Set-Aside (FAR 19.5)
8A	8(a) Set-Aside (FAR 19.8)
8AN	8(a) Sole Source (FAR 19.8)
HZC	Historically Underutilized Business (HUBZone) Set-Aside (FAR 19.13)
HZS	Historically Underutilized Business (HUBZone) Sole Source (FAR 19.13)
SDVOSBC	Service-Disabled Veteran-Owned Small Business (SDVOSB) Set-Aside (FAR 19.14)
SDVOSBS	Service-Disabled Veteran-Owned Small Business (SDVOSB) Sole Source (FAR 19.14)
WOSB	Women-Owned Small Business (WOSB) Program Set-Aside (FAR 19.15)
WOSBSS	Women-Owned Small Business (WOSB) Program Sole Source (FAR 19.15)
EDWOSB	Economically Disadvantaged WOSB (EDWOSB) Program Set-Aside (FAR 19.15)
EDWOSBSS	Economically Disadvantaged WOSB (EDWOSB) Program Sole Source (FAR 19.15)
LAS	Local Area Set-Aside (FAR 26.2)
IEE	Indian Economic Enterprise (IEE) Set-Aside (specific to Department of Interior)
ISBEE	Indian Small Business Economic Enterprise (ISBEE) Set-Aside (specific to Department of Interior)
BICiv	Buy Indian Set-Aside (specific to Department of Health and Human Services, Indian Health Services)
VSA	Veteran-Owned Small Business Set-Aside (specific to Department of Veterans Affairs)
VSS	Veteran-Owned Small Business Sole source (specific to Department of Veterans Affairs)
Examples
Example 1: Search by award type
Request URL
Response (JSON Output) v2
Example 2: Updated v2 Endpoint with FH Information
Request URL
Response (JSON Output)
OpenAPI Specification File
You can view the full details of this API in the OpenAPI Specification file available here: OpenAPI File

Get Opportunities Public API v2
HTTP Response Codes
200 - Success

404 – No Data found

400 – Bad Request

500 – Internal Server Error

Error Messages
Scenario	Error Messages
For limit, user provides range beyond 1000.	Limit valid range is 0-1000. Please provide valid input.
For limit or offset, user inputs characters/special characters.	limit/offset must be a positive number.
For postedFrom, postedTo, rdlfrom, rdlto user enters an invalid date format.	Invalid Date Entered. Expected date format is MM/dd/yyyy
User does not provide postedFrom and postedTo values.	PostedFrom and PostedTo are mandatory
User provides more than 1 year of date range for postedFrom and postedTo
OR
User provides more than 1 year of date range for rdlfrom and rdlto	Date range must be 1 year(s) apart
User provides invalid API Key	An invalid api_key was supplied
User does not provide any API key	No api_key was supplied
User clicks on the description link available in the response and description content is not available	Description Not Found

