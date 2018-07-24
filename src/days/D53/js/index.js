const inputs = document.querySelectorAll('.controls input');
 const asset = document.querySelector('.bs');
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

        if (this.value > 20) {
        asset.innerHTML = " bullshit";
      }
      if (this.value > 2 && this.value < 15) {
        asset.innerHTML = "derivative";
      }
      if (this.value > 3 && this.value < 15) {
        asset.innerHTML = " ";
      }
      
    }
    
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));