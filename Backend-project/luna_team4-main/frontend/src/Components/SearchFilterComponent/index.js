const SearchFilterComponent = (searchText, ListUnfiltered) => {

    let toSearch = searchText.toLowerCase()
        let listFiltered = []
        for(let i=0; i<ListUnfiltered.length; i++) {
          for(let key in ListUnfiltered[i]) {
            if(String(ListUnfiltered[i][key]).toLowerCase().includes(toSearch)) {
              listFiltered.push(ListUnfiltered[i]);
              break
            }
          }
        }
    return listFiltered
}

export default SearchFilterComponent