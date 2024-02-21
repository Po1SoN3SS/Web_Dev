export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public image: string,
    public kaspi_link: string,
    public rating: number,
  ) {
  }
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Sanc M2442PH серый',
    price: 58580,
    description: "Монитор 1920x1080",
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h7a/67278437548062.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/sanc-m2442ph-seryi-108213498/?c=750000000',
    rating: 7
  },
  {
    id: 2,
    name: 'Xiaomi Mi Curved Gaming XMMNTWQ34 черный',
    price: 99999,
    description: 'Монитор Xiaomi Mi Curved Gaming XMMNTWQ34 черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h32/63858015436830.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/xiaomi-mi-curved-gaming-xmmntwq34-chernyi-100129635/?c=750000000',
    rating: 7
  },
  {
    id: 3,
    name: 'Sanc M2736PB черный',
    price: 70000,
    description: 'Монитор Sanc M2736PB черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h43/64310085910558.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/sanc-m2736pb-chernyi-101738150/?c=750000000',
    rating: 7
  },
  {
    id: 4,
    name: 'XTREON XT2769VD черный',
    price: 89990,
    description: 'Монитор XTREON XT2769VD черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h1f/84386575482910.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/xtreon-xt2769vd-chernyi-113465095/?c=750000000',
    rating: 7
  },
  {
    id: 5,
    name: 'XTREON XT2966QP черный',
    price: 100900,
    description: 'Монитор XTREON XT2966QP черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/haf/84251909160990.png?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/xtreon-xt2966qp-chernyi-113129361/?c=750000000',
    rating: 7
  },
  {
    id: 6,
    name: 'ZOTAC GAMING RTX 4060',
    price: 175990,
    description: 'Видеокарта ZOTAC GAMING RTX 4060 Twin Edge ZT-D40600E-10M 8 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h00/h5a/84727487037470.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/zotac-gaming-rtx-4060-twin-edge-zt-d40600e-10m-8-gb-112525286/?c=750000000',
    rating: 5
  },
  {
    id: 7,
    name: 'Palit GeForce RTX 3060 Dual',
    price: 164990,
    description: 'Видеокарта Palit GeForce RTX 3060 Dual NE63060019K9-190AD 12GB',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h94/64210422890526.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-3060-dual-ne63060019k9-190ad-12gb-101214928/?c=750000000',
    rating: 5
  },
  {
    id: 8,
    name: 'GIGABYTE GeForce RTX 3060',
    price: 186950,
    description: 'Видеокарта GIGABYTE GeForce RTX 3060 GAMING OC 12G rev. 2.0 12 ГБ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/hfb/64345175982110.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3060-gaming-oc-12g-rev-2-0-12-gb-101717712/?c=750000000',
    rating: 5
  },
  {
    id: 9,
    name: 'UDORE GeForce GT210',
    price: 14750,
    description: 'Видеокарта UDORE GeForce GT210 1 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h80/84097777631262.png?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/udore-geforce-gt210-1-gb-113622046/?c=750000000',
    rating: 5
  },
  {
    id: 10,
    name: 'AFOX GT 710',
    price: 20860,
    description: 'Видеокарта AFOX GT 710 AF710-1024D3L5 1 Гб',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h14/82750978850846.jpg?format=gallery-medium',
    kaspi_link: 'https://kaspi.kz/shop/p/afox-gt-710-af710-1024d3l5-1-gb-112471617/?c=750000000',
    rating: 5
  }
];
