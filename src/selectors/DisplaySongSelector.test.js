import * as Selectors from './DisplaySongSelector';
import rootReducer from '../reducers/index';

describe('test the working of DisplaySongSelector',()=>{
    
    let initState;
    let SelectedSongs;

    describe('the working of selectors individually',()=>{

        describe('the working of song selector by keyword',()=>{

            beforeEach(()=>{
                initState=JSON.parse(JSON.stringify(rootReducer()));
            });
    
            it('should run correctly with searchkey: ka',()=>{
                initState.data.searchKeyword='ka';
                SelectedSongs=[{
                                    artist: "ammy virk",
                                    duration: "4:09",
                                    genre: "romance",
                                    id: 6,
                                    name: "kaun hoyega",
                                    thumbnail: "http://www.lyricswithmusic.com/wp-content/uploads/2018/08/KAUN-HOYEGA-Lyrics-640x400.jpg"
                              }]
                expect(Selectors.SelectSongsByKeyword(initState)).toEqual(SelectedSongs);
            });
    
            it('should handle with search key=" " correctly',()=>{
                initState.data.searchKeyword='  ';
                SelectedSongs=[]; //finally expected empty array
    
                expect(Selectors.SelectSongsByKeyword(initState)).toEqual(SelectedSongs);
            });
    
            it('should run correctly with alhanumeric search key="$%!@#" correctly',()=>{
                initState.data.searchKeyword='$%!@#';
                SelectedSongs=[]; //finally expected empty array
                expect(Selectors.SelectSongsByKeyword(initState)).toEqual(SelectedSongs);
            });
    
            afterEach(()=>{
                initState=undefined;
                SelectedSongs=undefined;
            });
        })
        
        describe('test the working of song selector by genre',()=>{
    
            beforeEach(()=>{
                initState=JSON.parse(JSON.stringify(rootReducer()));
            })
    
            it('should run correctly when no genre is slected',()=>{
                initState.data.filterArrays.genre=[]; //no genre is selected
                SelectedSongs=initState.data.songs; //finally selected songs is same as initial initState
                expect(Selectors.SelectSongsByGenre(initState)).toEqual(SelectedSongs);
            })
    
            it('should select songs correctly when two random genres are selected',()=>{
                initState.data.filterArrays.genre=['pop','romance'];
                SelectedSongs=[
                                {
                                    artist: "taylor swift",
                                    duration: "5:53",
                                    genre: "pop",
                                    id: 1,
                                    name: "enchanted",
                                    thumbnail: "https://img.buzzfeed.com/buzzfeed-static/static/2018-04/16/10/asset/buzzfeed-prod-web-04/sub-buzz-16652-1523887341-1.jpg?downsize=700:*&output-format=auto&output-quality=auto"
                                },
                                {
                                    artist: "one direction",
                                    duration: "3:18",
                                    genre: "pop",
                                    id: 2,
                                    name: "what makes you beautiful",
                                    thumbnail: "https://i.ytimg.com/vi/QJO3ROT-A4E/maxresdefault.jpg"
                                },
                                {
                                    id:3,
                                    name:"hello",
                                    genre:'pop',
                                    artist:"adele",
                                    duration:"4:55",
                                    thumbnail:"https://img.cache.vevo.com/thumb/cms/e331b4d0-3a5b-11e7-8afe-c35019589c0d.jpg"
                                },
                                {
                                    id:4,
                                    name:"tujhse door jo hota hoon",
                                    genre: "romance",
                                    artist:"gajendra verma",
                                    duration:"4:18",
                                    thumbnail:"https://i.ytimg.com/vi/DdLl-leD32o/maxresdefault.jpg"
                                },
                                {
                                    id:5,
                                    name:"tune mere jaana",
                                    genre: "romance",
                                    artist:"rohan rathore",
                                    duration:"4:04",
                                    thumbnail:"https://improxy.starmakerstudios.com/tools/im/560/production/cover_img/c162110fde25a383ee5f2248dd81cccf.png"
                                },
                                {
                                    id:6,
                                    name:"kaun hoyega",
                                    genre: "romance",
                                    artist:"ammy virk",
                                    duration:"4:09",
                                    thumbnail:"http://www.lyricswithmusic.com/wp-content/uploads/2018/08/KAUN-HOYEGA-Lyrics-640x400.jpg"
                                }
                              ];
                
                expect(Selectors.SelectSongsByGenre(initState)).toEqual(SelectedSongs);
            })
    
            afterEach(()=>{
                initState=undefined;
                SelectedSongs=undefined;
            })
        })
    
        describe('test the working of song selector by artists',()=>{
    
            beforeEach(()=>{
                initState=JSON.parse(JSON.stringify(rootReducer()));
            })
    
            it('should run correctly when no artist is slected',()=>{
                initState.data.filterArrays.artist=[]; //no artist is selected
                SelectedSongs=initState.data.songs; //finally selected songs is same as initial initState
                expect(Selectors.SelectSongsByArtist(initState)).toEqual(SelectedSongs);
            })
    
            it('should select songs correctly when two random artists are selected',()=>{
                initState.data.filterArrays.artist=['taylor swift','one direction'];
                SelectedSongs=[
                                {
                                    id:1,
                                    name:"enchanted",
                                    genre:"pop",
                                    artist:"taylor swift",
                                    duration:"5:53",
                                    thumbnail:'https://img.buzzfeed.com/buzzfeed-static/static/2018-04/16/10/asset/buzzfeed-prod-web-04/sub-buzz-16652-1523887341-1.jpg?downsize=700:*&output-format=auto&output-quality=auto'
                                },
                                {
                                    id:2,
                                    genre: "pop",
                                    name:"what makes you beautiful",
                                    artist:"one direction",
                                    duration:"3:18",
                                    thumbnail:"https://i.ytimg.com/vi/QJO3ROT-A4E/maxresdefault.jpg"
                                }
                              ]
                
                expect(Selectors.SelectSongsByArtist(initState)).toEqual(SelectedSongs);
            })
    
            afterEach(()=>{
                initState=undefined;
                SelectedSongs=undefined;
            })
        })
    })

    describe('tests the working of selectors as a whole',()=>{

        beforeEach(()=>{
            initState=JSON.parse(JSON.stringify(rootReducer()));
        })

        it('tests a particular hybrid case',()=>{
            initState.data.searchKeyword='le'; //setting search keyword as 'le'
            initState.data.filterArrays.artist=['adele'];  //setting artist as 'adele'
            initState.data.filterArrays.genre=['pop','jazz']; //setting genre to 'pop', 'jazz'
            SelectedSongs=[
                            {
                                id:3,
                                name:"hello",
                                genre:'pop',
                                artist:"adele",
                                duration:"4:55",
                                thumbnail:"https://img.cache.vevo.com/thumb/cms/e331b4d0-3a5b-11e7-8afe-c35019589c0d.jpg"
                            }
                          ]
            expect(Selectors.SelectSongsByArtist(initState)).toEqual(SelectedSongs);
        })
    })
})