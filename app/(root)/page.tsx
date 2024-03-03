import Card from '@/components/shared/Card';
import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image'
import Link from 'next/link'

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  });

  return (
    <>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold text-center md:text-left">Trust by</h2>

        <div className="flex md:flex-row justify-between">
          <div className="w-full md:w-72 mr-4">
            <CategoryFilter />
          </div>
          <div className='flex flex-wrap  '>
            <div className='flex flex-wrap  '>
              <div className='w-72 sm:w-1/3 h-auto overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                <div className='w-full h-screen border p-4'>
                  <img src="https://i.ibb.co/rv2tPpG/Twitter-header-1.png" alt="Card 1" className="w-full h-80 object-cover mb-4 overflow-hidden border-2" />
                  <h3 className="text-lg font-bold">Card Title 1</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 h-auto overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                <div className='w-full h-screen border p-4'>
                  <img src="https://tpc.googlesyndication.com/simgad/15786026862391396112?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qln_aYiiIwIHnkvHJfYedFrqaOGbg" alt="Card 2" className="w-full  h-80 object-cover mb-4" />
                  <h3 className="text-lg font-bold">Card Title 2</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 h-auto overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                <div className='w-72 h-screen border p-4'>
                  <img src="https://email2go.io/img/banner.png?v=2" alt="Card 3" className="w-full h-36 object-cover mb-4" />
                  <h3 className="text-lg font-bold">Card Title 3</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 h-auto overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                <div className='w-72 h-screen border p-4'>
                  <img src="https://i.ibb.co/DR1SS7L/opengraph.jpgg" alt="Card 3" className="w-full h-36 object-cover mb-4" />
                  <h3 className="text-lg font-bold">Card Title 3</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 h-auto overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                <div className='w-72 h-screen border p-4'>
                  <img src="https://i.ibb.co/DR1SS7L/opengraph.jpgg" alt="Card 3" className="w-full h-36 object-cover mb-4" />
                  <h3 className="text-lg font-bold">Card Title 3</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
              <div className='w-full sm:w-1/3 h-auto overflow-hidden transform transition-transform duration-300 hover:scale-105'>
                <div className='w-72 h-screen border p-4'>
                  <img src="https://tpc.googlesyndication.com/simgad/6628671293514050478?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qkymQMYWu-Xcb2WM5jqbTTG6pfLpA" alt="Card 3" className="w-full h-36 object-cover mb-4" />
                  <h3 className="text-lg font-bold">Card Title 3</h3>
                  <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-30 lg:w-80 md:ml-4">
            <CategoryFilter />
          </div>
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
