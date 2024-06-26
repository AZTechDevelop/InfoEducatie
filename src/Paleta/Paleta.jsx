import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { useMediaQuery } from '@react-hook/media-query';

function CreatorPaleta() {
    const isScreenBelowMd = useMediaQuery('(max-width: 768px)');
    const [palete, setPalete] = useState([]);
    const [culori, setCulori] = useState([]);
    const [culoareSelectata, setCuloareSelectata] = useState('#ffffff');
    const [numePaleta, setNumePaleta] = useState('');
    const [editarePaletaId, setEditarePaletaId] = useState(null);
    const [paletaAfisata, setPaletaAfisata] = useState(null);

    useEffect(() => {
        const paleteSalvate = JSON.parse(localStorage.getItem('paleteCulori'));
        if (paleteSalvate) {
            setPalete(paleteSalvate);
        }
    }, []);

    const schimbaCuloare = (color) => {
        setCuloareSelectata(color.hex);
    };

    const adaugaCuloare = () => {
        if (!culori.includes(culoareSelectata)) {
            setCulori([...culori, culoareSelectata]);
        }
    };

    const eliminaCuloare = (culoareDeEliminat) => {
        setCulori(culori.filter(culoare => culoare !== culoareDeEliminat));
    };

    const salveazaPaleta = () => {
        if (numePaleta.trim() === "") {
            alert('Te rog să introduci un nume pentru paleta.');
            return;
        }
        const existaDeja = palete.some(paleta => paleta.nume === numePaleta && paleta.id !== editarePaletaId);
        if (existaDeja) {
            alert('O paletă cu acest nume există deja. Te rog alege un nume diferit.');
            return;
        }
        const paleteActualizate = palete.filter(paleta => paleta.id !== editarePaletaId);
        const nouaPaleta = { id: editarePaletaId || Date.now(), nume: numePaleta, culori };
        setPalete([...paleteActualizate, nouaPaleta]);
        localStorage.setItem('paleteCulori', JSON.stringify([...paleteActualizate, nouaPaleta]));
        resetarePaleta();
    };

    const resetarePaleta = () => {
        setCulori([]);
        setNumePaleta('');
        setEditarePaletaId(null);
    };

    const incarcaPaleta = (paleta) => {
        if (editarePaletaId === paleta.id) {
            resetarePaleta();
        } else {
            setCulori(paleta.culori);
            setNumePaleta(paleta.nume);
            setEditarePaletaId(paleta.id);
            setPaletaAfisata(null);
        }
    };

    const stergePaleta = (id) => {
        const paleteActualizate = palete.filter(paleta => paleta.id !== id);
        setPalete(paleteActualizate);
        localStorage.setItem('paleteCulori', JSON.stringify(paleteActualizate));
        resetarePaleta();
        if (paletaAfisata && paletaAfisata.id === id) {
            setPaletaAfisata(null);
        }
    };

    const afiseazaPaleta = (paleta) => {
        if (paletaAfisata && paletaAfisata.id === paleta.id) {
            setPaletaAfisata(null);
        } else {
            setPaletaAfisata(paleta);
        }
    };

    return (
        <div className="flex  pt-5" style={{
            height: 'auto', paddingTop: '100px'
        }}>
          <div className={`w-1/2 xl:w-1/2 md:flex flex-col items-center justify-center ${isScreenBelowMd ? 'block' : 'hidden'} `}
          style={{marginTop:'-100px'}}
          >

                <div className="md:flex  block w-full items-center justify-center my-3 sticky rounded focus:outline-none focus:shadow-outline">
                    <input
                        className="ml-3 py-2 border rounded w-2/5 md:text-base sm:text-sm xl:text-xl xl:text-2xl  text-center text-sm"
                        placeholder="Nume Paleta"
                        value={numePaleta}
                        onChange={e => setNumePaleta(e.target.value)}
                    />
                    <button className="text-xs md:text-base sm:text-sm xl:text-xl xl:text-2xl w-2/5 ml-2 bg-green-500 text-white font-bold rounded focus:outline-none focus:shadow-outline" onClick={salveazaPaleta}>
                        Salvează Paleta
                    </button>
                </div>
                <SketchPicker color={culoareSelectata} onChangeComplete={schimbaCuloare} width="45%" height="50" />
                <div className="w-full relative items-center flex">
                    <button className="text-xs md:text-base sm:text-sm xl:text-xl xl:text-2xl mt-4 ml-5 text-xl bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-2/5" onClick={adaugaCuloare}>
                        Adaugă Culoare
                    </button>
                </div>
                <div className="w-full flex flex-wrap justify-center mt-2">
                    {culori.map((culoare, index) => (
                        <div key={index} className="m-1 w-16 h-16 flex justify-center items-center relative" style={{ backgroundColor: culoare }}>
                            <button className="absolute inset-0 w-full h-full opacity-0" onClick={() => eliminaCuloare(culoare)}>Elimină</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full xl:w-1/2 xl:flex block flex-col items-center justify-start overflow-auto p-4 saved-palettes-container">
                <p className="text-xs md:text-xl sm:text-base lg:text-2xl xl:text-3xl py-3 text-4xl text-black font-bold">Palete Salvate</p>
                {palete.map((paleta, index) => (
                    <div key={index} className="block xl:flex flex-col items-center justify-between bg-gray-600 text-white py-2 px-3 rounded w-4/5 mb-2">
                        <div className="block xl:flex w-full justify-between">
                            <span className="text-xs md:text-base sm:text-sm lg:text-xl xl:text-2xl cursor-pointer w-1/6" onClick={() => incarcaPaleta(paleta)}>{paleta.nume}</span>
                            <div className='w-5/6 flex'>
                                <button className="text-xs md:text-base sm:text-sm xl:text-xl xl:text-2xl text-white bg-green-600 px-2 text-xl rounded mx-2 w-auto" onClick={() => afiseazaPaleta(paleta)}>
                                    {paletaAfisata && paletaAfisata.id === paleta.id ? 'Ascunde' : 'Afișează'}
                                </button>
                                <button className="text-xs md:text-base sm:text-sm xl:text-xl xl:text-2xl text-white mx-2 bg-blue-800 px-2 rounded w-auto text-xl" onClick={() => incarcaPaleta(paleta)}>
                                    {editarePaletaId === paleta.id ? 'Închide Editare' : 'Editează'}
                                </button>
                                <button className="text-xs md:text-base sm:text-sm xl:text-xl xl:text-2xl text-white mx-2 bg-red-800 px-2 rounded w-auto text-xl" onClick={() => stergePaleta(paleta.id)}>Șterge</button>
                            </div>
                        </div>
                        {paletaAfisata && paletaAfisata.id === paleta.id && (
                            <div className=" w-full flex">
                                <h3 className="text-lg text-white font-bold w-2/5">Culori în paleta:</h3>
                                <div className="flex flex-wrap justify-center w-full">
                                    {paletaAfisata.culori.map((culoare, index) => (
                                        <div key={index} className="m-2 w-16 h-16" style={{ backgroundColor: culoare }}></div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CreatorPaleta;

