
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/header";
import Footer from "../components/footer";

export default function ListPage() {
  const { addToCart } = useContext(CartContext);

  const indoorPlants = [
    { id: 1, name: "Snake Plant", price: 12, img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Peace Lily", price: 15, img: "https://media.istockphoto.com/id/1302923231/photo/blooming-white-flowers-spathiphyllum.jpg?s=612x612&w=0&k=20&c=kj5tEEcX3ri9dEeNXY_Wq9KmaEm6bCn1TZLhwVrfyNQ=" },
    { id: 3, name: "Aloe Vera", price: 10, img: "https://plus.unsplash.com/premium_photo-1673818150416-7b96596cfdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxvZXZlcmF8ZW58MHx8MHx8fDA%3D" },
    { id: 4, name: "Spider Plant", price: 9, img: "https://images.unsplash.com/photo-1591403988599-07f06ec6fae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BpZGVycGxhbnR8ZW58MHx8MHx8fDA%3D" },
    { id: 5, name: "Pothos", price: 11, img: "https://media.istockphoto.com/id/1697295308/photo/tropical-epipremnum-aureum-marble-queen-pothos-houseplant.jpg?s=1024x1024&w=is&k=20&c=9vTL0zqeubHzVyuRzj_EKO4UfyiaA_K7boqngG1XfoE=" },
    { id: 6, name: "ZZ Plant", price: 14, img: "https://media.istockphoto.com/id/2199455412/photo/zamioculcas-zamiifolia-plant-in-white-flower-pot-on-the-wooden-table-against-the-white-brick.jpg?s=1024x1024&w=is&k=20&c=oQWEiztCMNu2FcF2Zhx-FHpTQg9iX_J1opwVlv9udOk=" },
  ];

  const floweringPlants = [
    { id: 7, name: "Orchid", price: 20, img: "https://media.istockphoto.com/id/2153928687/photo/close-up-of-stunning-yellow-orchids-flourishing-in-a-greenhouse.jpg?s=1024x1024&w=is&k=20&c=IppoaDTilWew-HsADaXrFZ6T13V0lQZmAIHXfmu6Vp4=" },
    { id: 8, name: "Rose", price: 18, img: "https://media.istockphoto.com/id/1310227195/photo/woman-hand-in-protective-gloves-is-fertilizing-bushes-of-red-roses-in-the-rockery-worker.jpg?s=1024x1024&w=is&k=20&c=vZAXxVgiK7apjL7Qu4Pes_djJk6sXX1kvxPAeq9r490=" },
    { id: 9, name: "Hibiscus", price: 16, img: "https://media.istockphoto.com/id/1759935569/photo/flowers.jpg?s=1024x1024&w=is&k=20&c=N7YsrN1mRGqcf1aYTpv3WWxcyX1gqrxxPt1l2FtYAkM=" },
    { id: 10, name: "Jasmine", price: 14, img: "https://media.istockphoto.com/id/2056555543/photo/philadelphus-coronarius-european-pipe-bush.jpg?s=1024x1024&w=is&k=20&c=zx66Rhvi0vZ7IpASzuWz_hoWXKpyJYwnuUoQYmw2XdM=" },
    { id: 11, name: "Sunflower", price: 12, img: "https://media.istockphoto.com/id/2173327924/photo/agricultural-field-with-yellow-sunflowers-against-the-sky-with-clouds-sunflower-field-gold.jpg?s=1024x1024&w=is&k=20&c=8d4rFoeb-ikEA2kdFwbucfDZRxqwLmud4LrEutWx8Rw=" },
    { id: 12, name: "Marigold", price: 13, img: "https://media.istockphoto.com/id/2198211151/photo/vivid-orange-marigold-field-in-full-bloom-during-sunny-day-in-india.jpg?s=1024x1024&w=is&k=20&c=uQNbHkJNn5d5Zgcz4tnIOt9v6TFpHHVDi3DI_nvKUpk=" },
  ];

  const outdoorPlants = [
    { id: 13, name: "Palm", price: 25, img: "https://media.istockphoto.com/id/1181140664/photo/tropical-coconut-leaf-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=MoKjpf90Ry4C-V_B_4u-YWTHtd1Q_j-P2ZEXOuA6ym0=" },
    { id: 14, name: "Ficus", price: 22, img: "https://media.istockphoto.com/id/2221277141/photo/fig-tree-in-dinaric-alps-montenegro.jpg?s=1024x1024&w=is&k=20&c=YXGRppKsTzcqMZ9LUXjCJhY-xd64_O693bAwzSnng04=" },
    { id: 15, name: "Bamboo", price: 19, img: "https://media.istockphoto.com/id/2178115567/photo/a-lush-green-bamboo-forest-thriving-in-nature-which-is-also-an-important-ecosystem-and-a.jpg?s=1024x1024&w=is&k=20&c=KtEPVp4UWZJZgrgstjGRBjSfodQ6HCMUJIeGeI0q5D4=" },
    { id: 16, name: "Fern", price: 17, img: "https://media.istockphoto.com/id/2066058950/photo/nz-tree-ferns-in-native-forest.jpg?s=1024x1024&w=is&k=20&c=AtE3rf4kG_od-epOzcEyQBRT2Oq6Wmv8Z1zv2tV-EgE=" },
    { id: 17, name: "Cactus", price: 14, img: "https://media.istockphoto.com/id/2155851154/photo/a-field-of-green-cacti-with-yellow-flowers.jpg?s=1024x1024&w=is&k=20&c=f8z3zxZ2QWm4_0-2RA3t_3JatLkaJK0z1kKRJCkTXgM=" },
    { id: 18, name: "Lavender", price: 16, img: "https://media.istockphoto.com/id/2143731209/photo/lavender-flowers-close-up-on-sky-background.jpg?s=1024x1024&w=is&k=20&c=i80g_SXd9BQgoH9Zu3yG5DFIq-HUQM3naNaIxlUhNdA=" },
  ];

  const renderSection = (title, plants) => (
    <>
      <h2>{title}</h2>
      <div className="product-grid">
        {plants.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h5>{p.name}</h5>
            <p>${p.price}</p>
  <button onClick={() => addToCart(p)}>Add to Cart</button> 


          </div>
        ))}
      </div>
    </>
  );


  return (
    <>
      <Header />
      <div className="container">
        {renderSection("Indoor Plants", indoorPlants)}
        {renderSection("Flowering Plants", floweringPlants)}
        {renderSection("Outdoor Plants", outdoorPlants)}
      </div>
      <Footer />
    </>
  );
}
