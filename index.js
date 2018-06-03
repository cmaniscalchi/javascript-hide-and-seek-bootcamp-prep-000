function getFirstSelector(selector) {
  
  return document.querySelector(selector); 
}

function nestedTarget() {
  document.getElementById('nested')
  
}


describe('nestedTarget()', () => {
    it('pulls a .target out of #nested', () => {
      expect(nestedTarget()).toEqual(document.querySelector('#nested .target'))
    })
  })
