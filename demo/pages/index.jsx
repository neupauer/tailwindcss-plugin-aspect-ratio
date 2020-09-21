import Head from "next/head";

function Index() {
  return (
    <div className="antialiased text-gray-900">
      <Head>
        <title>Tailwind CSS Plugin – Aspect Ratio</title>
      </Head>
      <main className="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <section>
          <h1 className="text-3xl font-bold">
            Tailwind CSS Plugin – Aspect Ratio
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  16:9
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-16:9">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  1:1
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-1:1">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  3:1
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-3:1">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1550852464-dfac1e62181d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  2:1
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-2:1">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  21:9
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-21:9">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  1:1
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-1:1">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <span className="absolute bottom-0 left-0 z-10 px-2 py-1 m-2 text-sm font-bold tracking-wider text-white bg-gray-900 bg-opacity-50 rounded-full">
                  9:16
                </span>
                <div className="overflow-hidden rounded-md shadow-lg">
                  <div className="bg-gray-300 aspect-ratio-9:16">
                    <img
                      className="object-cover"
                      src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Index;
