import './Home.scss'
import { useState, useEffect } from 'react'
import { BsListUl, BsGrid, BsGithub, BsLinkedin } from 'react-icons/bs';
import { parse } from 'node:path/win32';
import Navbar from '../../components/Navbar/Navbar';
import confetti from './confetti.gif'

export const Home = () => {
    const requirements: any[] = ["Sigrun Brend prikar ein bunka við penninum", "Beinir Johannesen fær mest stemmur í klaksvík", "Einki er avgjørt áðrenn allar stemmur eru taldar upp", "So mangla vit eisini brævatkvøvurnar", "Orsaka vit hava tekniskar trupulleikar", "Nú leggur tú orð í munnin á mær", "Forfólk ella forforfólk", 'Beinir Johannesen sigur "Sjolvandø"', "Fiskiveiðuavtalan við Russland", "Fast track", "Fullveldi", "Tað er deyðakvirt (awkward silence) og tíðindafólkið hyggur í kameraði", 13, 14, 15, 16]
    const unSortedNumbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const consequences: any[] = ["Drekk 2 smakkir1", "Drekk 2 smakkir1", "Drekk 2 smakkir2", "Drekk 2 smakkir3", "Drekk 2 smakkir4", "Drekk 2 smakkir5", "Drekk 2 smakkir6", "Drekk 2 smakkir7", "Drekk 2 smakkir8", "Drekk 2 smakkir9", "Drekk 2 smakkir10", "Drekk 2 smakkir11", "Drekk 2 smakkir12", "Drekk 2 smakkir13", "Drekk 2 smakkir14", "Drekk 2 smakkir15", "Drekk 2 smakkir16"]
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

    const [isSet, setSet] = useState<any>(true)
    const iconStyle = { color: 'black', fontSize: '8vw', margin: '1vw' }

    const onClick = (Clicked: number) => {
        if(fullLine){
            console.log("penis")
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
                console.log("im in here")
                setHasWon(isClicked.filter(item => item !== line));
                setFullLine(true)
              }
            });
      
            
            
        }
        }
        console.log(hasWon)
      }

    return (
        <div className='MainContainer'>            
            <img className='confetti'  src={fullLine? confetti:""} alt="" />
            <div className="IconContainer"> <div className='LayoutButton' onClick={() => ToggleLayOut("grid")}> <BsGrid style={iconStyle} />  </div> <div className='LayoutButton' onClick={() => ToggleLayOut("list")}><BsListUl style={iconStyle} /></div></div>
            <div className={layout === "grid" ? 'EnteriesGrid' : 'EnteriesList'}>
                {plateNumbers.map((item: any, index: number) => (
                    <div id={index.toLocaleString()} key={index} style={{display: layout === "grid" ? 'grid' : 'flex'}} className={isClicked.includes(item) ? "EnteriesItem Clicked" : "EnteriesItem"} onClick={() => onClick(item)}>
                        <h6>{item}</h6>
                        {layout === "grid" ? null:<p>{requirements[index]}</p>}
                    </div>
                ))}

            </div>
            <h2>Straffur:</h2>
            <h2>{lastClicked}</h2>
            <Navbar/>
        </div>
    );
}