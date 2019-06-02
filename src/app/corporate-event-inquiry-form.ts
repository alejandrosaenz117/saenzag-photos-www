export class CorporateEventInquiryForm {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public eventTitle: string,
    public startDate: Date,
    public endDate: Date,
    public website: string,
    public additionalInfo: string,
    public captcha: string
  ) {}
}
