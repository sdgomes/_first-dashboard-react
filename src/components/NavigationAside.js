import React from 'react';
import ToggleAside from './ToggleAside';
import ToggleItem from './ToggleItem';

function NavigationAside() {
    return (
        <div className="fixed-top aside-nav">
            <div className="block-aside">
                <img alt="Menu Icon" src="/img/iconfinder_list-bullet-playlist-menu-note_2931145.png" />
            </div>
            <div>
                <ToggleAside>
                    <ToggleItem toggle="#AsideToggle" icon="fas fa-user-friends">Oie</ToggleItem>
                    <ToggleItem toggle="#AsideToggle" icon="fas fa-user-friends">Tudo Bom</ToggleItem>
                    <ToggleItem toggle="#AsideToggle" icon="fas fa-user-friends">Tudo Bom</ToggleItem>
                    <ToggleItem toggle="#AsideToggle" icon="fas fa-user-friends">Tudo Bom</ToggleItem>
                    <ToggleItem toggle="#AsideToggle" icon="fas fa-user-friends">Tudo Bom</ToggleItem>
                    
                </ToggleAside>
            </div>
        </div>
    );
}
export default NavigationAside;