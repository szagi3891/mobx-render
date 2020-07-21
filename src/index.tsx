import { observable } from 'mobx';

console.info("index.tsx run - mobx-render");

//Właściwość obiektu stanu, może być albo readlny, albo mutowalna obserwowalna

interface AppComponentState {
    show: boolean,
}

class AppComponentState {
    @observable counter = 0;

    constructor(readonly props: AppComponentState) {
    }

    tick() {
        console.info('tick');
        this.counter++;
    }
}

/*
    /1
    <div>Loading<div>

    lub
    
    /2
    <div class="aaa">
        <span>
            title
        </span>
    </div>
*/

interface PropsType {
    isReady: boolean,
    name: string,
}

                        //wstrzykujemy obiekt z reaktywnymi propsami

const app = (props, context) => {

    const state = new AppComponentState(props);

    context.subscribe(() => {
        const timer = setInterval(() => {
            state.tick();
        });

        return () => {
            clearInterval(timer);
        };
    });

    //
    return () => {
        //render

        //props.isReady
            //rysujemy komponent 2
        
        //else
            //rysujemy komponent 1 (loading)
        
        
        //zależnści mobxowe ...


        //pierwsza opcja, zwrócenie jsx-a

        //zwrócenie jakiegoś reaktywnego kontrolera ... ???
    };
};


const root = document.getElementById('root');

console.info(root);

if (root !== null) {
    //montowanie korzenia aplikacji
}