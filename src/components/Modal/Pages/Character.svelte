<script>
  import Thumbnail from '../../Thumbnail/Thumbnail.svelte';
  import LevelGroup from '../_LevelGroup.svelte';
  import StarGroup from '../../Stars/StarGroup.svelte';
  import Filters from '../../Filters/Filters.svelte';
</script>

<div>
  <div class=" mb-4 grid grid-cols-3 gap-x-2 gap-y-3">
    <Thumbnail img="/images/character/wanderer.webp" vision="anemo" alt="wanderer" />
    <div class="col-span-2 flex flex-col justify-end">
      <div>
        <h3 class="text-lg">Sangonomiya Kokomi</h3>
        <StarGroup rating={5} />
      </div>
      <div class="grid grid-cols-2 gap-x-2">
        <LevelGroup label="Level" value="80/90" />
        <LevelGroup label="Const." value="0/6" />
      </div>
    </div>
    <LevelGroup label="Normal" value="10" />
    <LevelGroup label="Skill" value="10" />
    <LevelGroup label="Burst" value="13" />
  </div>
  <Filters selected="anemo" />
</div>
