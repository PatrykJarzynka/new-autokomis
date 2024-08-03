type Location = 'left' | 'right'

import skup from '@/assets/images/skup.jpg'
import laweta from '@/assets/images/laweta.jpg'
import importCars from '@/assets/images/import.jpg'

interface CompanyItem {
    itemTitle: string;
    itemDescription: string;
    location: Location;
    imgPath: string;
}

export const companyItems: CompanyItem[] = [
    {
        itemTitle: 'Skup / sprzedaż / zamiana samochodów używanych',
        itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: 'left',
        imgPath: skup
    },
    {
        itemTitle: 'Import samochodów z zagranicy',
        itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: 'right',
        imgPath: importCars
    },
    {
        itemTitle: 'Usługi pomocy drogowej',
        itemDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        location: 'left',
        imgPath: laweta
    }
]