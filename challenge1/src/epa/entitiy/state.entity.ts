import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('state')
export class State {
  @PrimaryColumn()
  PSTATABB: string;

  @Column({ nullable: true })
  FIPSST: number;

  @Column({ nullable: true })
  YEAR: number;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNAMEPCAP: number;
  // Annual Values (generation, emissions, and heat input)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHTIAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHTIOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHTIANT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHTIOZT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNGENAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNGENOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXOZ: number;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  STSO2AN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCO2AN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCH4AN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STN2OAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCO2EQA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHGAN: number;
  // Output Emission Rates (emissions per MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXRTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXRTO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STSO2RTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCO2RTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCH4RTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STN2ORTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STC2ERTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHGRTA: number;
  // Input Emission rates (emissions per MMBtu)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXRA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXRO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STSO2RA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCO2RA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCH4RA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STN2ORA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STC2ERA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHGRA: number;
  //Combustion Output Rates (emissions per MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXCRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNOXCRO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STSO2CRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCO2CRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCH4CRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STN2OCRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STC2ECRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHGCRT: number;

  // @Column({ nullable: true, type: 'decimal', default: 0 })
  // STHTRT: number;

  //Generation by Fuel Type (MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENACL: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAOL: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAGS: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENANC: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAHY: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENABM: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAWI: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENASO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAGT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAOF: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENAOP: number;
  // Renewable and Non-Renewable Generation (MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENATN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENATR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  // Combustion and Non-Combustion Generation (MWh)
  STGENATH: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENACY: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGENACN: number;
  // Resource Mix (percentages)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCLPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STOLPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STGSPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STNCPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STHYPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STBMPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STTHPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCYPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  STCNPR: number;
}
