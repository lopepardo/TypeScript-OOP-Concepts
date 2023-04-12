interface IDog {
  getPedigree: Function;
}

class Dog implements IDog {
  getPedigree(): Promise<Pedigree> {
    return someThirdPartyIoCall("...");
  }
}

class MockDog implements IDog {
  getPedigree(): Promise<Pedigree> {
    return new DummyPedigreeObject();
  }
}

// Function testing
async function methodToBeTested(dog: IDog): Promise<void> {
  try {
    let pedigree = await dog.getPedigree();
    // assertions here
  } catch (err) {
    console.log(err);
  }
}

// Real World
methodToBeTested(new Dog());

// During Testing
methodToBeTested(new MockDog());

export {};
