import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';

function CreatorPaleta() {
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
        
        <div className="flex bg-gray-400" style={{height:'100vh'}}>
            <div className="w-1/2 flex flex-col items-center justify-center" style={{ marginTop: '-100px' }}>
                <div className="flex w-full items-center justify-center my-3 sticky rounded focus:outline-none focus:shadow-outline">
                    <input
                        className="py-2 border rounded w-2/5 text-center text-2xl"
                        placeholder="Nume Paleta"
                        value={numePaleta}
                        onChange={e => setNumePaleta(e.target.value)}
                    />
                    <button className="text-2xl w-2/5 ml-2 bg-green-500 text-white font-bold rounded focus:outline-none focus:shadow-outline" onClick={salveazaPaleta}>
                        Salvează Paleta
                    </button>
                </div>
                <SketchPicker color={culoareSelectata} onChangeComplete={schimbaCuloare} width="60%" height="50px" />
                <div className='w-full h-auto relative items-center flex'>
                    <button className="mt-4 ml-5 text-xl bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-2/5" onClick={adaugaCuloare}>
                        Adaugă Culoare
                    </button>
                    <div className="w-full flex flex-wrap justify-center mt-2">
                        {culori.map((culoare, index) => (
                            <div key={index} className="m-1 w-16 h-16 flex justify-center items-center relative" style={{ backgroundColor: culoare }}>
                                <button className="absolute inset-0 w-full h-full opacity-0" onClick={() => eliminaCuloare(culoare)}>Elimină</button>
                                <span className="text-white text-4xl">X</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-start overflow-auto p-4 saved-palettes-container">
                <p className="py-3 text-4xl text-purple-950 font-bold">Palete Salvate</p>
                {palete.map((paleta, index) => (
                    <div key={index} className="flex flex-col items-center justify-between bg-gray-600 text-white py-2 px-3 rounded w-4/5 mb-2">
                        <div className="flex w-full justify-between">
                            <span className="cursor-pointer w-1/6" onClick={() => incarcaPaleta(paleta)}>{paleta.nume}</span>
                            <div className='w-5/6 flex'>
                                <button className="text-white bg-green-600 px-2 text-xl rounded mx-2 w-auto" onClick={() => afiseazaPaleta(paleta)}>
                                    {paletaAfisata && paletaAfisata.id === paleta.id ? 'Ascunde' : 'Afișează'}
                                </button>
                                <button className="text-white mx-2 bg-blue-800 px-2 rounded w-auto text-xl" onClick={() => incarcaPaleta(paleta)}>
                                    {editarePaletaId === paleta.id ? 'Închide Editare' : 'Editează'}
                                </button>
                                <button className="text-white mx-2 bg-red-800 px-2 rounded w-auto text-xl" onClick={() => stergePaleta(paleta.id)}>Șterge</button>
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
