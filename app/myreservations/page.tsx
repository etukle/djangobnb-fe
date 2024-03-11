import Image from 'next/image';

const MyReservationsPage = () => {
  return (
    <main className="mx-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 mb-2 text-2xl">My Reservations</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Beach House"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>

            <p className="mb-2">
              Check in date: <strong>11/3/2024</strong>
            </p>
            <p className="mb-2">
              Check out date: <strong>13/3/2024</strong>
            </p>
            <p className="mb-2">
              Number of nights: <strong>2</strong>
            </p>
            <p className="mb-2">
              Total price: <strong>$200</strong>
            </p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl">
              Go to property
            </div>
          </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="Beach House"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h2 className="mb-4 text-xl">Property Name</h2>

            <p className="mb-2">
              Check in date: <strong>11/3/2024</strong>
            </p>
            <p className="mb-2">
              Check out date: <strong>13/3/2024</strong>
            </p>
            <p className="mb-2">
              Number of nights: <strong>2</strong>
            </p>
            <p className="mb-2">
              Total price: <strong>$200</strong>
            </p>

            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
