import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Органический крем для лица",
      description: "Увлажняющий крем с экстрактом алоэ и масла жожоба",
      price: "2 890 ₽",
      image: "/img/80430049-7984-4ba3-8144-29806cec91df.jpg",
    },
    {
      id: 2,
      name: "Натуральная сыворотка",
      description: "Восстанавливающая сыворотка с витамином С",
      price: "3 490 ₽",
      image: "/img/80430049-7984-4ba3-8144-29806cec91df.jpg",
    },
    {
      id: 3,
      name: "Очищающий гель",
      description: "Мягкий гель для умывания с растительными экстрактами",
      price: "1 990 ₽",
      image: "/img/80430049-7984-4ba3-8144-29806cec91df.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-eco-cream">
      {/* Навигация */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Leaf" className="text-eco-forest" size={24} />
              <span
                className="font-bold text-xl text-eco-forest"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Green Leaf
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-eco-forest transition-colors"
              >
                Главная
              </a>
              <a
                href="#cosmetics"
                className="text-gray-700 hover:text-eco-forest transition-colors"
              >
                Косметика
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-eco-forest transition-colors"
              >
                О бренде
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-eco-forest transition-colors"
              >
                Блог
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-eco-forest transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button
              variant="outline"
              className="border-eco-forest text-eco-forest hover:bg-eco-forest hover:text-white"
            >
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="relative py-20 bg-gradient-to-br from-eco-light to-eco-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1
                className="text-5xl lg:text-6xl font-bold text-eco-forest leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Сертифицированная
                <span className="block text-eco-sage">органическая</span>
                косметика
              </h1>
              <p className="text-lg text-gray-700 max-w-md">
                Откройте для себя мир натуральной красоты с нашей коллекцией
                органической косметики, сертифицированной по международным
                стандартам.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-eco-forest hover:bg-eco-forest/90 text-white px-8 py-3 text-lg">
                  Смотреть каталог
                </Button>
                <Button
                  variant="outline"
                  className="border-eco-forest text-eco-forest hover:bg-eco-forest hover:text-white px-8 py-3 text-lg"
                >
                  <Icon name="Play" size={16} className="mr-2" />О бренде
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    className="text-eco-forest"
                    size={20}
                  />
                  <span className="text-sm text-gray-600">100% органика</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" className="text-eco-forest" size={20} />
                  <span className="text-sm text-gray-600">Сертифицировано</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" className="text-eco-forest" size={20} />
                  <span className="text-sm text-gray-600">Cruelty-free</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/587d17bb-206a-453d-9d31-9b9cca4030ba.jpg"
                alt="Натуральная косметика Green Leaf"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-eco-light rounded-full flex items-center justify-center">
                    <Icon name="Leaf" className="text-eco-forest" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-eco-forest">
                      Eco-friendly
                    </p>
                    <p className="text-sm text-gray-600">
                      Упаковка из переработанных материалов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог продуктов */}
      <section id="cosmetics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-eco-forest mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Наша косметика
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Каждый продукт создан из натуральных ингредиентов и прошёл строгую
              сертификацию
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-eco-forest mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-eco-forest">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-eco-sage hover:bg-eco-forest text-white"
                    >
                      <Icon name="Plus" size={16} className="mr-1" />В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О бренде */}
      <section id="about" className="py-20 bg-eco-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-bold text-eco-forest mb-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                О Green Leaf
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Мы создаём косметику, которая заботится не только о вашей
                красоте, но и о планете. Каждый наш продукт сертифицирован как
                органический и производится с соблюдением высочайших стандартов
                качества.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-eco-forest mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-eco-forest">
                      Органические ингредиенты
                    </h4>
                    <p className="text-gray-600">
                      Только натуральные компоненты без химических добавок
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Recycle"
                    className="text-eco-forest mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-eco-forest">
                      Экологичная упаковка
                    </h4>
                    <p className="text-gray-600">
                      Переработанные материалы и минимум пластика
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Award"
                    className="text-eco-forest mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-eco-forest">
                      Международные сертификаты
                    </h4>
                    <p className="text-gray-600">
                      Подтверждённое качество от ведущих организаций
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-eco-forest mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Органические ингредиенты
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-eco-forest mb-2">
                      5+
                    </div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-eco-forest mb-2">
                      1000+
                    </div>
                    <div className="text-sm text-gray-600">
                      Довольных клиентов
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-eco-forest mb-2">
                      3
                    </div>
                    <div className="text-sm text-gray-600">
                      Международных сертификата
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блог */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-eco-forest mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Блог о красоте
            </h2>
            <p className="text-lg text-gray-600">
              Советы по натуральному уходу и последние новости
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-eco-light rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="FileText" className="text-eco-forest" size={48} />
                </div>
                <h3 className="font-semibold text-lg text-eco-forest mb-2">
                  Как выбрать органическую косметику
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Разбираемся в сертификатах и составах натуральной косметики
                </p>
                <Button
                  variant="ghost"
                  className="text-eco-forest hover:text-eco-forest/80 p-0"
                >
                  Читать далее{" "}
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-eco-light rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Sparkles" className="text-eco-forest" size={48} />
                </div>
                <h3 className="font-semibold text-lg text-eco-forest mb-2">
                  Уход за кожей зимой
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Защищаем кожу от холода с помощью натуральных средств
                </p>
                <Button
                  variant="ghost"
                  className="text-eco-forest hover:text-eco-forest/80 p-0"
                >
                  Читать далее{" "}
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-full h-48 bg-eco-light rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Leaf" className="text-eco-forest" size={48} />
                </div>
                <h3 className="font-semibold text-lg text-eco-forest mb-2">
                  Экологичная красота
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Как косметика влияет на окружающую среду
                </p>
                <Button
                  variant="ghost"
                  className="text-eco-forest hover:text-eco-forest/80 p-0"
                >
                  Читать далее{" "}
                  <Icon name="ArrowRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-eco-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-eco-forest mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600">
              Мы всегда готовы помочь вам выбрать идеальный уход
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-eco-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-eco-forest" size={24} />
                </div>
                <h3 className="font-semibold text-eco-forest mb-2">Адрес</h3>
                <p className="text-gray-600">
                  г. Москва, ул. Экологическая, 15
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-eco-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-eco-forest" size={24} />
                </div>
                <h3 className="font-semibold text-eco-forest mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-eco-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-eco-forest" size={24} />
                </div>
                <h3 className="font-semibold text-eco-forest mb-2">Email</h3>
                <p className="text-gray-600">hello@greenleaf.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-eco-forest text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" size={24} />
                <span
                  className="font-bold text-xl"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Green Leaf
                </span>
              </div>
              <p className="text-eco-sage">
                Натуральная красота для каждого дня
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-eco-sage">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Уход за лицом
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Уход за телом
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Макияж
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Подарочные наборы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-eco-sage">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-eco-sage rounded-full flex items-center justify-center hover:bg-white hover:text-eco-forest transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-eco-sage rounded-full flex items-center justify-center hover:bg-white hover:text-eco-forest transition-colors"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-eco-sage rounded-full flex items-center justify-center hover:bg-white hover:text-eco-forest transition-colors"
                >
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-eco-sage mt-8 pt-8 text-center text-eco-sage">
            <p>&copy; 2024 Green Leaf. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
