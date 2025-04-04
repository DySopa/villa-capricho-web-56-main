
import RoomCard from "./RoomCard";

const Rooms = () => {
  const rooms = [
    {
      name: "Quarto Presidencial",
      description: "Experimente o auge do luxo em nosso Quarto Presidencial. Com uma espaçosa cama King Size e uma sala de estar privativa com sofás confortáveis, perfeita para pequenas reuniões ou momentos de relaxamento. Decorado com elegância, este quarto oferece vistas deslumbrantes e comodidades premium para uma estadia verdadeiramente excepcional.",
      price: "10.000,00MT",

      images: [
        {
          url: "/img/Pre.jpg",
          alt: "Quarto Presidencial - Sala de Estar"
        },
        {
          url: "/img/Pre1.jpg",
          alt: "Quarto Presidencial - Vista do Quarto"
        },
        {
          url: "/img/Pre2.jpg",
          alt: "Quarto Presidencial - Área de Entretenimento"
        },
        {
          url: "/img/Pre3.jpg",
          alt: "Quarto Presidencial - Quarto Principal"
        }
      ],
      amenities: ["King Size", "Sala de Reunião", "Wi-Fi", "Pequeno Almoço", "Minibar", "TV de Tela Plana", "Ar Condicionado", "Cofre"]
    },
    {
      name: "Quarto Executivo",
      description: "Nosso Quarto Executivo oferece o equilíbrio perfeito entre conforto e funcionalidade. Projetado para viajantes exigentes, este quarto elegante apresenta uma decoração sofisticada, área de trabalho espaçosa e todas as comodidades essenciais para garantir uma estadia produtiva e agradável.",
      price: "5.000,00MT",
      images: [
        {
          url: "/img/Exec.jpg",
          alt: "Quarto Executivo - Visão Geral"
        },
        {
          url: "/img/Exec1.jpg",
          alt: "Quarto Executivo - Área de Trabalho"
        },
        {
          url: "/img/Exec2.jpg",
          alt: "Quarto Executivo - Casa de Banho"
        }
      ],
      amenities: ["Cama Queen Size", "Área de Trabalho", "Wi-Fi", "Pequeno Almoço", "TV de Tela Plana", "Ar Condicionado", "Cofre"],
      /*promotion: "15% de desconto para estadias de 3+ noites"*/
    },
   
  ];

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">Nossos Quartos</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Escolha entre nossos quartos de luxo, cada um projetado para oferecer o máximo conforto e elegância durante sua estadia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div key={index} className="h-full flex">
              <RoomCard
                name={room.name}
                description={room.description}
                price={room.price}
                images={room.images}
                amenities={room.amenities}
               /* promotion={room.promotion}*/
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
