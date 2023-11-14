import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import style from './Cards.module.css';
import useCards from '../../hooks/useCards';
import loading from '../Wallpaper/newLoading2.gif'

const Cards = () => {

    const { currentDogs, currentPage, totalPages, handleNextPage, handleFirstPage, handlePrevPage, handleLastPage, isLoading} = useCards();    

    return (
        <div >
            {isLoading ? (<img src={loading} alt="Loading" className={style.loading} />)
            : ( 
            <>
            <div className={style.cards}>
                {currentDogs.map((dog) => (
                    <Card
                        key={dog?.id}
                        id={dog?.id}
                        image={dog?.image}
                        name={dog?.name}
                        height={dog?.height}
                        weight={dog?.weight}
                        years={dog?.years}
                        temperament={dog?.temperament}
                    />
                ))}
            </div>
            <div className={style.pagination}>
                <Pagination
                    onFirstPage={handleFirstPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                    onLastPage={handleLastPage}
                />
            </div> 
            </>
            )}
            
        </div>
    );
};

export default Cards;


