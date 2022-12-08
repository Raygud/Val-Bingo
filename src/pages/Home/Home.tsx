import './Home.scss'
import { useState, useEffect } from 'react'
import { BsListUl, BsGrid } from 'react-icons/bs';
import Navbar from '../../components/Navbar/Navbar';
import confetti from './confetti.gif'

export const Home = () => {
    const requirements: any[] = [
"So mangla vit eisini brævatkvøvurnar",
"Orsaka! Vit hava onkrar tekniskar trupulleikar",
"Einki er avgjørt fyrr allar stemmurnar eru taldar upp",
"Sigrun Brend prikar ein bunka av atkvøðum við penninum ",
'Beinir Johannesen sigur "sjolvandø"',
"John Johannesen brýtur Jóannes Hansen av ",
'Jóannes Hansen: "unga stjørnuskotið í Klaksvík"',
"Bjarni Kárason Petersen verður kallaður Kári Bjarnason Petersen",
"Seta føtur undir egið borð",
"Ruth Vang er í einum litríkum jakka",
"Fólkafloksflokkurin verður størstur flokkur í Havn",
"Javnaðarflokkurin verður størstur flokkur",
'Aksel nevnir "umsorganarøkið" ella "vælferðararbeiðarar"',
"Jenis tosar um kristindóm og politikk",
"Nú leggur tú orð í munnin á mær",
"Tað er deyðakvirt, einki hendir á skerminum og tíðindafólkið hyggur í kameraði"
    ]
    const unSortedNumbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const consequences: any[] = ["Drekk 2 smakkir", "Drekk 3 smakkir", "Drekk 1 smakk", "Drekk 5 smakkir", "Drekk 1 smakk", "Drekk 2 smakkir", "Tak eitt skot", "Drekk 4 smakkir", "Drekk 2 smakkir8", "Drekk 3 smakkir", "Drekk 6 smakkir", "Drekk 1 smakk", "Tak eitt skot", "Drekk 6 smakkir", "Tak eitt skot", "Drekk 1 smakk", "Drekk 3 smakkir"]
    for (let i = unSortedNumbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = unSortedNumbers[i];
        unSortedNumbers[i] = unSortedNumbers[j];
        unSortedNumbers[j] = k;
    }

    const [plateNumbers, setPlateNumbers] = useState<any[]>([...Array(16)])
    const [isClicked, setIsClicked] = useState<any[]>([])
    const [hasWon, setHasWon] = useState<any[]>([])

    const [oldValue, setOldValue] = useState<boolean>(false)
    const [fullLine, setFullLine] = useState<boolean>(false)
    const [lastClicked, setLastClicked] = useState<boolean>(false)
    const [layout, setLayout] = useState<string>("grid")

    const iconStyle = { color: 'black', fontSize: '8vw', margin: '1vw' }

    const onClick = (Clicked: number) => {
        if(fullLine){
            setFullLine(false)
        }
        if (!isClicked.includes(Clicked)) {
            setIsClicked(oldArray => [...oldArray, Clicked]);
        }
        else {
            setIsClicked(isClicked.filter(item => item !== Clicked));
        }
    }
    

    useEffect(() => {
        
        if (localStorage.getItem("ClickedNumbers") && oldValue === false) {
            setIsClicked(JSON.parse(localStorage.getItem('ClickedNumbers') as any))
            setOldValue(true)

        } else {
            setOldValue(true)

        }
        if (oldValue === true) {
            localStorage.setItem('ClickedNumbers', JSON.stringify(isClicked));
        }

        setLastClicked(consequences[isClicked[isClicked.length - 1]])
        IsLineFull()
    }, [isClicked])



    useEffect(() => {
        if (!localStorage.getItem("StoredNumbers")) {
            localStorage.setItem('StoredNumbers', JSON.stringify(unSortedNumbers));
            setPlateNumbers(unSortedNumbers)
        } else {

            setPlateNumbers(JSON.parse(localStorage.getItem('StoredNumbers') as any))

        }

    }, [isClicked])

    

    const ToggleLayOut = (Layout: string) => {
        setLayout(Layout)
    }

    // const reSetConfetti = () => {
    //     console.log(fullLine)
    //     setTimeout(() => setFullLine(false), 1000);
    //     setTimeout(() => console.log(fullLine), 1100);

        
    // }


    const IsLineFull = () => {
        const items = document.querySelectorAll(".EnteriesItem");
      
        for (let i = 0; i <= items.length; i += 4) {
          const line = plateNumbers.slice(i, i + 4);
      
          if (line.every(item => isClicked.includes(item))) {
            line.forEach((item, j) => {
              items[i + j].classList.add("wholeLine");
              items[i + j].classList.add(`win${j + 1}`);
              const allValuesExist = line.every(line => hasWon.includes(line));
              if(!allValuesExist){
                setHasWon(isClicked.filter(item => item !== line));
                setFullLine(true)
              }
            });
      
            
            
        }
        }
      }

    return (
        <div className='MainContainer'>            
            <img className='confetti'  src={fullLine? confetti:""} alt="" />
            <div className="IconContainer"> <div className='LayoutButton' onClick={() => ToggleLayOut("grid")}> <BsGrid style={iconStyle} />  </div> <div className='LayoutButton' onClick={() => ToggleLayOut("list")}><BsListUl style={iconStyle} /></div></div>
            <div className={layout === "grid" ? 'EnteriesGrid' : 'EnteriesList'}>
                {plateNumbers.map((item: any, index: number) => (
                    <div id={index.toLocaleString()} key={index} style={{display: layout === "grid" ? 'grid' : 'flex'}} className={isClicked.includes(item) ? "EnteriesItem Clicked" : "EnteriesItem"} onClick={() => onClick(item)}>
                        <h6>{item}</h6>
                        {layout === "grid" ? null:<p>{requirements[item]}</p>}
                    </div>
                ))}

            </div>
            <h2>{fullLine? "BINGO! :":"Straffur:"}</h2>
            <h2 className='Straffur'>{fullLine? "BOTNA!":lastClicked}</h2>
            <Navbar/>
        </div>
    );
}