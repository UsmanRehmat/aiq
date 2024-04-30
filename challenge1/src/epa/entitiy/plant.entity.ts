import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { State } from './state.entity';

@Entity('plant')
export class Plant {
  @PrimaryColumn()
  SEQPLT: number;

  @Column({ nullable: true })
  YEAR: number;

  @ManyToOne(() => State)
  PSTATABB: State;

  @Column({ nullable: true })
  PNAME: string;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  ORISPL: number;

  @Column({ nullable: true })
  OPRNAME: string;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  OPRCODE: number;

  @Column({ nullable: true })
  UTLSRVNM: string;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  UTLSRVID: number;

  @Column({ nullable: true })
  SECTOR: string;

  @Column({ nullable: true })
  BANAME: string;

  @Column({ nullable: true })
  BACODE: string;

  @Column({ nullable: true })
  NERC: string;

  @Column({ nullable: true })
  SUBRGN: string;

  @Column({ nullable: true })
  SRNAME: string;

  @Column({ nullable: true })
  ISORTO: string;
  @Column({ nullable: true })
  FIPSST: string;
  @Column({ nullable: true })
  FIPSCNTY: string;
  @Column({ nullable: true })
  CNTYNAME: string;

  @Column({ nullable: true })
  LAT: string;
  @Column({ nullable: true })
  LON: string;
  @Column({ nullable: true })
  CAMDFLAG: string;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  NUMUNT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  NUMGEN: number;
  @Column({ nullable: true })
  PLPRMFL: string;
  @Column({ nullable: true })
  PLFUELCT: string;
  @Column({ nullable: true })
  COALFLAG: string;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CAPFAC: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  NAMEPCAP: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  NBFACTOR: number;
  @Column({ nullable: true })
  RMBMFLAG: string;
  @Column({ nullable: true })
  CHPFLAG: string;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  USETHRMO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PWRTOHT: number;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  ELCALLOC: number;
  @Column({ nullable: true })
  PSFLAG: string;
  //  Annual Values (generation, emissions, and heat input)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHTIAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHTIOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHTIANT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHTIOZT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNGENAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNGENOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXOZ: number;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLSO2AN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCO2AN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCH4AN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLN2OAN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCO2EQA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHGAN: number;
  // Output Emission Rates (emissions per MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXRTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXRTO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLSO2RTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCO2RTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCH4RTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLN2ORTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLC2ERTA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHGRTA: number;
  //Input Emission rates (emissions per MMBtu)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXRA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXRO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLSO2RA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCO2RA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCH4RA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLN2ORA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLC2ERA: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHGRA: number;
  //Combustion Output Rates (emissions per MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXCRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNOXCRO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLSO2CRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCO2CRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCH4CRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLN2OCRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLC2ECRT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHGCRT: number;
  //Unadjusted Annual Values (emissions, and heat input)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNNOX: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNNOXOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNSO2: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNCO2: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNCH4: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNN2O: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNHG: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNHTI: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNHTIOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNHTIT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  UNHTIOZT: number;
  @Column({ nullable: true })
  UNNOXSRC: string;
  @Column({ nullable: true })
  UNNOZSRC: string;
  @Column({ nullable: true })
  UNSO2SRC: string;
  @Column({ nullable: true })
  UNCO2SRC: string;
  @Column({ nullable: true })
  UNCH4SRC: string;
  @Column({ nullable: true })
  UNN2OSRC: string;
  @Column({ nullable: true })
  UNHGSRC: string;
  @Column({ nullable: true })
  UNHTISRC: string;
  @Column({ nullable: true })
  UNHOZSRC: string;
  // Adjustment Values (emissions, heat input, heat rate)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  BIONOX: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  BIONOXOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  BIOSO2: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  BIOCO2: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  BIOCH4: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  BION2O: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPCHTI: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPCHTIOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPNOX: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPNOXOZ: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPSO2: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPCO2: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPCH4: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  CHPN2O: number;

  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHTRT: number;
  // Generation by Fuel Type (MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENACL: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAOL: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAGS: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENANC: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAHY: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENABM: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAWI: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENASO: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAGT: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAOF: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENAOP: number;
  // Renewable and Non-Renewable Generation (MWh)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENATN: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENATR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  // Combustion and Non-Combustion Generation (MWh)
  PLGENATH: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENACY: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGENACN: number;
  // Resource Mix (percentages)
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCLPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLOLPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLGSPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLNCPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLHYPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLBMPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLTHPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCYPR: number;
  @Column({ nullable: true, type: 'decimal', default: 0 })
  PLCNPR: number;
}
