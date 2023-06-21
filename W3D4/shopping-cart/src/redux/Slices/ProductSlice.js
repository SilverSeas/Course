// create productSlice object that contains an initial state that includes an array called storage, which holds information about various products.
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        storage:[
            {productID:1,
             name:'blue potion',
             img:'https://mario.wiki.gallery/images/1/13/Blue_Potion.png',
             price:10,
             amount:0,
            },
            {productID:2,
             name:'red potion',
             img:'https://mario.wiki.gallery/images/d/dd/Red_Potion.png',
             price:15,
             amount:0,
            },
            {productID:3,
             name:'heart',
             img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VsyfSVk2xf_mJhuec3LqUpD6pMjOG_Ftug&usqp=CAU',
             price:5,
             amount:0,
            },
            {productID:4,
             name:'mushroom',
             img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAA/1BMVEX39/cAAAD////1Dg73Hh7ZDQ3ttVzov371AAD7+/v1u1/ttl/lr1l2dnb0AAD2ExPb29t/f3+/v7/DDAw4KxbruWr92tqSkpLYAADjDg4wMDD8ysrk5ORUVFTkaGigoKAcHBz8s7OyCwvTDQ3oDQ3+5OTrum1AMRl8CAimCgr/9fWuj19JSUn3Wlo6Ojr1IiJbRiONbDd9YDAoHxBUBQX6pqatra0hGQ2NCQleTTPlvHzh0dHatLQXFxf74eH0wsJrQ0NwODhZGBj5XFz7ubn6lJSCOzviSUniW1uuT099JyeeFA0uLRcVEAiJHBDGCQubHx+zi02rjV0xHQBoUCl5v2zLAAAERUlEQVR4nO3d23bbVBSFYcchQWobx3bbNE5SYorLoaRxQyGhQFLOLdBSDn3/Z+EG8FwemR5bsqQ49j+v92F9W7qQ5S2p1SKEEELIKiZvV5irxsTkp1u9ynK4WLh2b626HC2x7T62poING7bmgg0bthoMLtVec7nkddr2TIaHByZfv7l9ed5847r0h2aW826dOLvWp26pH+5uXJ7dfdela2fBhg0bNmzYsGH7N/nS2SYXeq2DNNsjyYW1PddmiTYp5mB+WftIB3dLHbPdySZZd5E2WSftnvtxqGV+2/3itnHHgpwzzabrPMSGDRs2bNiwrYItlzRkSxs42rTMZFq3L/n2c8l+Usbr2wWTJY27852U8r0WmfwDoX2oh+r2QLKryTom7xSPGysbhSmllA0tciv1BI22B+Y3ysbAnmElbHaskZv+Ay2yhw0bNmzYsGHDtkS2kUZLCFe+JWyhf7BparXZ5S3jKX4QB0tsW+bjhg0bNmzYsGH7L+Ge9by2rHjmtG1p+VP3YfPu8dEk97qSFx1zFWsPVba/UzQX9rdDnFIqGWuRp1L+cT+fsukq3NNV+MHtovC2sFskLZkbbNvM3hlr976Wn257XNz2EBs2bNiwYcOGbSpZNTaziTXadNNBGZu7dRts4eq6Apvu4niUGVv2vrYrTgu9dzJj61y4WUraQgUzbNXF2+wJUYFt1nHDhg0bNmzYsGHDhg0bNmzYsGHDhu262NpLZvvxC0mw6a3kam1mg2/2k9ZSge1xyosfOpXa7GOP4fZ9FTb/JguZtBmbrmat/+Ngw4YNGzZs2BbSZveG1mdLmbGs7ef3JGM3+ra83GD0Qnq8LLHv9aX2H+nIdnot8pdk28f6ega7cuFJu/BGhxL7S0J/Hdja1rXHJ+k2fYbObczxT0uWsrnBvE1bYcOGDRs2bNhW27Y+MBmVuJ4c2cHqtNmE8WrLl8VrwYYNGzZs2LBhWx7b4MHi2AazbXvHk/zqvmsWvnH226s7JqE41+jO65RWr35PquUPqX5vyjbjPRg2T264nEmrp7bVWx1s07U6Saqlp+XPeh9xsm3z8gTbmW31JNhcq1TbDM9V225hw4YNGzZs2K6VzTRKtSV/GyHv9yR7OsZnkpO7LsFmWwWbbfWnTqkDn2uRp+kf7NArz/AtEr2KvfmuS7DZVs904K9cqw91yo+kxzD18njGCRpserrcbcamJ2i0lfJgw4YNGzZs2FbLpj3Wlsz2qSap1V+21aLZqgw2bNiwYcOGDdtK2PT7xIn3Jyu16ZR/ay3z21oHmrOn/+fs7Y2bDeTk9WTKta7WMj8tfPG6petm/w+oMvH/gG6Zz1qn5sptVYOwYcOGDRs2bNfWdj6c5NnmrfqzeSIz1mvTvQHh3RO15XD+7QjFkzdla8iDDRs2bNiwYcO2kLbuVhOZfpitIVzxt12UyJXQCCGEEEIIIdc1/wD4Fb1QbZ3SDAAAAABJRU5ErkJggg==',
             price:15,
             amount:0,
            },
            {productID:5,
             name:'bobomb',
             img:'https://www.pngitem.com/pimgs/m/18-181333_a-bomb-from-mario-bob-omb-pixel-art.png',
             price:30,
             amount:0,
            },
            {productID:6,
             name:'fire flower',
             img:'https://www.pngitem.com/pimgs/m/50-507402_super-mario-bros-mario-fire-flower-pixel-art.png',
             price:50,
             amount:0,
            },
        ]
    },
    reducers: {
    
    }
})
export const { } = productSlice.actions;
export default productSlice.reducer;