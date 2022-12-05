import './Home.scss'
import { useState, useEffect } from 'react'
import { BsListUl, BsGrid, BsGithub, BsLinkedin } from 'react-icons/bs';
import { parse } from 'node:path/win32';


export const Home = () => {
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
    const [oldValue, setOldValue] = useState<boolean>(false)
    const [lastClicked, setLastClicked] = useState<boolean>(false)
    const [layout, setLayout] = useState<string>("grid")

    const [isSet, setSet] = useState<any>(true)
    const iconStyle = { color: 'black', fontSize: '8vw', margin: '1vw' }

    const onClick = (Clicked: any) => {
        console.log(isClicked)
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
        console.log(Layout)
        setLayout(Layout)
    }

    return (
        <div>
            <div className="IconContainer"> <div className='LayoutButton' onClick={() => ToggleLayOut("grid")}> <BsGrid style={iconStyle} />  </div> <div className='LayoutButton' onClick={() => ToggleLayOut("list")}><BsListUl style={iconStyle} /></div></div>
            <div className={layout === "grid" ? 'EnteriesGrid' : 'EnteriesList'}>
                {plateNumbers.map((item: any, index: number) => (
                    <div key={index} className={isClicked.includes(item) ? "EnteriesItem Clicked" : "EnteriesItem"} onClick={() => onClick(item)}>
                        <h6>{item}</h6>
                    </div>
                ))}

            </div>
            <h2>Straffur:</h2>
            <h2>{lastClicked}</h2>
        </div>
    );
}