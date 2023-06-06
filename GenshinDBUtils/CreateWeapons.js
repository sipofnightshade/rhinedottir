import fs from 'fs';
import path from 'path';

const weaponsPath = path.join(process.cwd(), 'weapons');
const weaponFiles = fs.readdirSync(weaponsPath);

const weaponData = {};

weaponFiles.forEach((filename) => {
  const filePath = path.join(weaponsPath, filename);
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const weapon = JSON.parse(fileData);

  const {
    name: fullName,
    rarity,
    weapontype: type,
    substat: specialized,
    effectname,
    effect,
    r1,
    r2,
    r3,
    r4,
    r5
  } = weapon;

  const name = path.basename(filename, '.json');

  if (rarity === '1' || rarity === '2') {
    return;
  }

  const ref = [r1, r2, r3, r4, r5];

  if (!weaponData[type]) {
    weaponData[type] = [];
  }

  weaponData[type].push({
    name,
    fullName,
    rating: rarity,
    type,
    specialized,
    effectname,
    effect,
    ref
  });
});

const outputFilePath = path.join(process.cwd(), 'Weapons.ts');
const outputData = `export const WeaponData = ${JSON.stringify(weaponData, null, 2)};`;

fs.writeFileSync(outputFilePath, outputData);

console.log('Weapons.js file created successfully!');
