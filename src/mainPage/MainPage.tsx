import React from 'react'

const MainPage: React.FC = () => {
    return (
        <div>
            <h4>Что такое хуки?</h4>
            <br/>
            <h5>
                Чтобы работать с локальными состояниями и методами жизненного цикла.
                <br/>
                Хуки позволяют работать с ними сразу - без написания классов.
            </h5>
            <br/>
            <h4>Проблемы классов - прична появления хуков.</h4>
            <br/>
            <ol>
                <li>
                    <h5>
                        Классы становятся нечитаемыми: они разрастаются и часто хранят разуню логику в одном месте.
                        Например, в <strong>componentDidMount()</strong> можно задать стиль для какого-то элемента,
                        и запросить данные из API, и менять title страницы. И все это - в одном методе жизненного цикла.
                    </h5>
                </li>
                <br/>
                <li>
                    <h5>
                        Приходится дополнительно тратить время на оптимизацию классов:
                        проводить рефакторинг, декомпозировать, менять струкутру не только
                        конкретного компонента, но и всех связанных с ним.
                        Кода у функционального компонента появляется потребность в методе жизненного
                        цикла, приходится переписывать его на классовый.
                    </h5>
                </li>
            </ol>
        </div>
    )
}

export default MainPage