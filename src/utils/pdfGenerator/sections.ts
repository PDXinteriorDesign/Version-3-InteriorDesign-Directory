export const AGREEMENT_SECTIONS = {
  introduction: {
    title: '1. Company Introduction',
    content: `This Interior Design Contract (Contract) is entered into on [Effective Date], by and between [Provider's Name/Company] (hereinafter referred to as the Provider) and [Client's Name] (hereinafter referred to as the Client), collectively referred to as the (Parties), who agree to be bound by the terms of this Contract.`
  },
  scope: {
    title: '2. Scope of Services',
    content: [
      'The Provider shall deliver the following interior design services (Services) to the Client:',
      '• Work with the Client to create a conceptual design that meets the Client\'s objectives',
      '• Utilize appropriate computer applications and tools during the design process',
      '• Budget planning, including selecting furnishings, materials, and estimating costs',
      '• Establish a timeline for the completion of the interior design project',
      '• Perform design services at the following location (Property): [Property Address]',
      '• Additional Services: [List any other agreed services]'
    ]
  },
  proprietary: {
    title: '3. Proprietary Information',
    content: `All designs, documentation, notes, and proprietary information shared or created by the Provider shall remain the property of the Provider and are for design purposes only. The Provider will not provide supplementary architectural and/or engineering services. Any proprietary information shared between the Parties shall remain confidential.`
  },
  responsibilities: {
    title: '4. Responsibilities',
    content: [
      'Provider Responsibilities:',
      '• Oversee the interior design services until project completion',
      '• Ensure the terms outlined in this Contract are carried out professionally and diligently',
      '',
      'Client Responsibilities:',
      '• Provide timely approvals, access to the property, and any requested project-related information',
      '• Ensure that payments are made as outlined in this Contract'
    ]
  },
  payment: {
    title: '5. Payment Terms',
    content: [
      'The Client agrees to pay the Provider:',
      '• A flat or hourly rate of [Amount] (delete as appropriate)',
      '• A one-time consultation fee of [Amount]',
      '• Payment shall be made via: [Accepted Payment Methods]',
      '• Payment Schedule: [Insert details about due dates and milestones]',
      '• Additional Costs: The Client is responsible for all expenses for furniture, materials, and equipment'
    ]
  },
  confidentiality: {
    title: '6. Confidentiality',
    content: `Both Parties agree to keep any confidential information shared during the project private and not disclose it to third parties.`
  },
  amendments: {
    title: '7. Amendments',
    content: `This Contract may be amended only by a written agreement signed by both Parties.`
  },
  warranties: {
    title: '8. Representations and Warranties',
    content: `The Provider cannot guarantee exact prices for materials and furnishings. A proposed budget will be provided to the Client, and any payment delays may affect the project timeline.`
  },
  termination: {
    title: '9. Termination Terms',
    content: `Either party may terminate the contract with written notice. The client agrees to pay for all work completed and any outstanding invoices at the time of termination.`
  },
  disputes: {
    title: '10. Resolution of Disputes',
    content: `Any disputes will be resolved through mediation. Further legal action cannot be pursued beyond the agreed terms in this section.`
  }
};

export const PAYMENT_FIELDS = [
  'Design Fee',
  'Deposit Due (50%)',
  'Remaining Balance'
];

export const SIGNATURE_FIELDS = [
  'Client Signature',
  'Designer Signature'
];