import { createServer, Factory, Model } from "miragejs";
export default function makeServerRequest() {
  createServer({
    models: {
      room: Model,
    },
    factories: {
      room: Factory.extend({
        id(i) {
          return `room-${i}`;
        },
        latitude() {
          return (Math.random() * (90 - (-90)) + (-90)).toFixed(6); 
        },
        longitude() {
          return (Math.random() * (180 - (-180)) + (-180)).toFixed(6);
        },
        host() {
          const hosts = ['Joseph', 'Alice', 'Bob', 'Eve', 'Mallory'];
          return hosts[Math.floor(Math.random() * hosts.length)];
        },
        bathroom() {
          return Math.random() > 0.5; 
        },
        offers() {
          return {
            bathroom: Math.random() > 0.5,
            hairDryes: Math.random() > 0.5,
            hotWater: Math.random() > 0.5,
            led: Math.random() > 0.5,
            ac: Math.random() > 0.5,
            acType: Math.random() > 0.5 ? 'Central air conditioning' : 'Window air conditioning',
            wifi: Math.random() > 0.5,
            kitchen: Math.random() > 0.5,
            dedicatedWorkSpace: Math.random() > 0.5,
            parking: Math.random() > 0.5,
            co2: Math.random() > 0.5,
            smokeAlarm: Math.random() > 0.5,
          };
        },
        yearHosting() {
          return Math.floor(Math.random() * 10); 
        },
        note() {
          const notes = [
            'Please note that the building is under construction.',
            'No pets allowed.',
            'Quiet hours from 10 PM to 7 AM.',
            'Street parking is available.',
            'Shared space with other guests.'
          ];
          return notes[Math.floor(Math.random() * notes.length)];
        },
        avgRating() {
          return (Math.random() * (5 - 1) + 1).toFixed(2); 
        },
        pool() {
          return Math.random() > 0.5; 
        },
        listingBathroomLabel() {
          const labels = ["1 shared bath", "2 shared baths", "1 private bath"];
          return labels[Math.floor(Math.random() * labels.length)];
        },
        bathrooms() {
          return Math.floor(Math.random() * 3) + 1;
        },
        listingBedLabel() {
          const labels = ["1 bed", "2 beds", "3 beds"];
          return labels[Math.floor(Math.random() * labels.length)];
        },
        bedrooms() {
          return Math.floor(Math.random() * 3) + 1;
        },
        beds() {
          return Math.floor(Math.random() * 3) + 1;
        },
        businessHostLabel() {
          return null;
        },
        city() {
          const cityNames = ['Delhi', 'Noida', 'Gurgaon', 'Mumbai', 'Bijnor'];
          return cityNames[Math.floor(Math.random() * cityNames.length)];
        },
        listingGuestLabel() {
          const labels = ["1 guest", "2 guests", "3 guests"];
          return labels[Math.floor(Math.random() * labels.length)];
        },
        listingName() {
          const names = [
            'Aloft Chicago Mag',
            'Loft Style Private Apt 4 (1 Room- 420 Friendly)',
            'S8 - Honore 2',
            'Classic luxury on iconic Michigan Ave',
            "S3 Private cozy room. NO parking. 15min to O'Hare",
            '01b. Twin bed in Shared Space - Female Guests Only',
            'Unique Cozy Room A3 #1',
            'Comfy and Complete Studio Apt near Boystown',
            '1BR Tranquil & Airy Apartment in Lincoln Square',
            'Sonder at Found Chicago | Bunk Room',
            'Loft Style Private Apt 4 (1 Room- 420 Friendly)'
          ];
          return names[Math.floor(Math.random() * names.length)];
        },
        reviewsCount() {
          return Math.floor(Math.random() * 100); 
        },
        starRating() {
          return (Math.random() * (5 - 1) + 1).toFixed(1); 
        },
        title() {
          const titles = [
            'Apartment in Chicago',
            'Room in Chicago',
            'Hotel in Chicago',
            'Room in Mount Prospect',
            'Shared room in Chicago',
            'Room in Chicago',
            'Boutique hotel in Chicago'
          ];
          return titles[Math.floor(Math.random() * titles.length)];
        },
        avgRatingLocalized() {
          return `${(Math.random() * (5 - 1) + 1).toFixed(2)} (${Math.floor(Math.random() * 100)})`; 
        },
        accessibilityLabel() {
          const labels = [
            '1170 per night, originally 1520',
            '310 per night, originally 410'
          ];
          return labels[Math.floor(Math.random() * labels.length)];
        },
        discountedPrice() {
          return `${(Math.random() * (2000 - 100) + 100).toFixed(2)}`; 
        },
        checkin() {
          const date = new Date();
          date.setDate(date.getDate() + Math.floor(Math.random() * 30));
          return date.toISOString().split('T')[0]; 
        },
        checkout() {
          const date = new Date();
          date.setDate(date.getDate() + Math.floor(Math.random() * 30) + 1);
          return date.toISOString().split('T')[0]; 
        },
        pets() {
          return Math.random() > 0.5;
        },
        webURL(i) {
          return `https://www.airbnb.com/rooms/${i}?guests=1&adults=1`;
        },
        images() {
          const baseImages = [
            "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/971b9744-1bf7-420c-af54-f37e70a6b55f.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/8fe3a076-7e3f-447b-9308-674307b04ae8.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/5017955d-1e31-43ca-a5aa-4e6a289095f5.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/238ddfca-e3a2-48df-baf8-2117cc118a21.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/97683ff1-4f06-4ff8-95fd-3c2b9dac3488.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/e00510e1-cb66-4a48-9ffa-b4dc73b8b603.png?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/96a455c7-22e3-40ed-acc3-491c8bd7e1df.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/18dd455d-efc6-4386-942d-0adc348188e5.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/46feda5d-37cb-4782-be06-46da6da1d75f.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/1d0a4c05-c408-4896-ae1a-1e00c2587a2a.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/e3e31e07-2694-45ca-807a-d60722cf41c1.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/c05d79f3-91fa-4114-b0e4-c04b69239cbe.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-690609862774713974/original/1d12c303-c2b9-4734-99f0-b4eeb7f85ec0.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-690609862774713974/original/8138ddfe-720b-4a29-8f59-8ac6df638e63.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-690609862774713974/original/89a393ae-c5f8-4b00-bbec-5a1aede8664c.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-690609862774713974/original/9c91c5bd-e2ac-40f0-9ff0-014a03af187c.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-690609862774713974/original/efb39e0f-7553-4a09-8c4b-108a4abdb55e.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-690609862774713974/original/964044c5-ef56-4fe7-a056-cb5ae9b01c90.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-753059732737671055/original/7e00cebb-fa65-483e-8c4f-d13dec06c010.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-753059732737671055/original/72b659ae-e1b1-4f28-93d1-38f9b3aae9a0.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-753059732737671055/original/1d849d8b-b8ac-43c4-a1fd-9e7f7976c10a.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-753059732737671055/original/55dcc94b-20f8-4e75-9ca4-a33e9238be74.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-753059732737671055/original/205b852b-d66a-417f-b8ca-cdf60b7cd82a.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-753059732737671055/original/5fce275b-fd5d-4a4e-870c-4ca371efbfa3.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-878893471211139160/original/fd15c45f-b8ea-4437-a0bb-551cfb293742.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-878893471211139160/original/dc9866de-fe2a-4e06-8b89-8ae709dbc6bb.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-878893471211139160/original/927fabf9-c8de-4a65-b0a1-f64a9af2bea8.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-878893471211139160/original/b8b70812-cb53-42cb-a337-fb5a5091eccf.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-878893471211139160/original/3b0e54ec-36f0-4069-898c-06e92735ff67.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-878893471211139160/original/b40c0316-1182-4343-9b03-dabd72ed8b82.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-51781759/original/0cb80957-f6b1-4053-84ce-5e2a63140d74.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-51781759/original/ae4c1241-5e5b-4f9f-982b-c225d2c22f68.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-51781759/original/c0ac76bc-bd27-4f35-9c83-1c2e464afcc9.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-51781759/original/b7fb8d6d-6106-43f1-8914-3b9e9a5c1dec.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-51781759/original/cfa20f83-0ca1-4bdb-bf33-aca52afd88b7.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-51781759/original/91a5cf65-c9ff-4d1d-ae66-5690f0ebfdc5.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/96a455c7-22e3-40ed-acc3-491c8bd7e1df.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/18dd455d-efc6-4386-942d-0adc348188e5.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/46feda5d-37cb-4782-be06-46da6da1d75f.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/1d0a4c05-c408-4896-ae1a-1e00c2587a2a.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/e3e31e07-2694-45ca-807a-d60722cf41c1.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODU1ODI4MzQzMjMyOTg5Mzc2/original/c05d79f3-91fa-4114-b0e4-c04b69239cbe.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/971b9744-1bf7-420c-af54-f37e70a6b55f.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/8fe3a076-7e3f-447b-9308-674307b04ae8.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/5017955d-1e31-43ca-a5aa-4e6a289095f5.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/238ddfca-e3a2-48df-baf8-2117cc118a21.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/97683ff1-4f06-4ff8-95fd-3c2b9dac3488.png?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-878208604809836365/original/e00510e1-cb66-4a48-9ffa-b4dc73b8b603.png?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTQ4MzcyMTgwNDA3ODU4Mw%3D%3D/original/8da4dc1c-081d-4b78-88f9-a008936d0700.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTQ4MzcyMTgwNDA3ODU4Mw%3D%3D/original/20cf50bd-353d-45fd-8938-e2d403a8097d.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTQ4MzcyMTgwNDA3ODU4Mw%3D%3D/original/6a958916-57e2-438f-8d4e-100ef604100c.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1131483721804078583/original/7bcf252d-99af-43a7-8e4b-3a59e6ffd8eb.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1131483721804078583/original/0115e97d-b9ec-4028-beb7-928fb8582970.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1131483721804078583/original/a47c2ecc-cd1d-4c38-8bef-2d0893b9e631.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/649b4f6d-211b-4754-b9bd-3c8d76980120.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/1c16a659-5d2a-47bc-a668-7164b04e8545.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/2458b9ac-6c6d-47ca-8685-2ddb8ff5a72f.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/022eace6-70eb-415b-8e53-2051d3b7312f.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/4815214e-5442-4c6f-b501-8b80aaf18a3b.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/6e56cf22-d3c9-4160-8c70-fcb77ede5434.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1166990641479729210/original/9ddd71be-cfe5-4fbd-8a2f-07ee136fbacb.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1166990641479729210/original/ef653f5d-c737-4434-87f2-05ed5d408f26.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1166990641479729210/original/355f6c86-0a78-414d-a3f7-fd64bd6ed810.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1166990641479729210/original/e2f38339-0c64-46c1-9f70-9163140e89c3.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1166990641479729210/original/52e09534-fe45-4409-9433-caf87c125deb.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1166990641479729210/original/f463d84b-c7c9-4d4f-a1ce-f728f87f1119.jpeg?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1165154441613525895/original/10795459-804c-4b55-9beb-fc36624fc51f.png?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1165154441613525895/original/23399f07-40b4-42e4-a91a-6ec46440bab3.png?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1165154441613525895/original/1464ef24-95ba-43b9-9153-bc70cbcac597.png?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1165154441613525895/original/bcd47bee-cf43-467c-936b-3e1b6cb113a5.png?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1165154441613525895/original/b6545f66-52be-4cbc-8b87-d09bae5c45c9.png?im_w=720",
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1165154441613525895/original/a6c349bd-efe7-40c2-a889-9b33e198d210.png?im_w=720",
          "https://a0.muscache.com/im/pictures/10d20f69-50a5-4da9-8a61-8a06f8e42ad7.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/0408d78f-869b-4396-8b37-9470bf1663c3.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/323b673c-4434-46c5-ac6d-fb9136471248.jpg?im_w=720",
          "https://a0.muscache.com/im/pictures/f9d093a1-b397-46ce-b768-923f4a984569.jpg?im_w=1440",
          "https://a0.muscache.com/im/pictures/79720470-3f68-4143-b525-19dc644763a0.jpg?im_w=1440",
          'https://a0.muscache.com/im/pictures/e05f0608-1883-4100-bc93-be610a7343b1.jpg?ml=true%3Faki_policy%3Dlarge&im_w=1440',
          'https://a0.muscache.com/im/pictures/f810dc51-cbe9-40e7-8b86-146731430144.jpg?ml=true%3Faki_policy%3Dlarge&im_w=1440',
          "https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/14c553cc-7d8a-4909-bd1d-201de148b086.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/f9c8e73c-1109-47d1-b9a5-d3948e501de3.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/4ccd0401-8b23-48b8-91f0-2c6d29787dd4.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/d68f711c-9a21-49f9-8e9b-23ed3029eb94.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/b7981e42-5843-429a-b2e6-0677fe00851a.jpeg?im_w=1440",
          'https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/eee48662-d33f-45bb-a700-eb38b588c3ae.jpeg?im_w=1440',
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1198563721657724766/original/bd380f72-7523-4207-a8be-ef5c92f83535.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1198563721657724766/original/21beaa4a-3319-49bb-bd12-d54a679ef7ee.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1198563721657724766/original/a15299f1-5cdd-4488-94f7-7c64a2afd49d.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5ODU2MzcyMTY1NzcyNDc2Ng%3D%3D/original/2bd5b44a-c31e-4860-b8fd-045aa4d00db3.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE5ODU2MzcyMTY1NzcyNDc2Ng%3D%3D/original/14d32c50-f551-44af-ab02-cb871e60b108.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1117210179713518752/original/bae0baa0-29cf-4b32-bbb9-b1dc6cf6820f.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1117210179713518752/original/18fe28a4-77d0-4ad1-acc7-0928e5b311e5.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1117210179713518752/original/be1ba2fb-1338-473d-864d-e821490733e6.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1117210179713518752/original/4cee902a-1bd3-4822-a46f-a9eeeae5b1c4.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1117210179713518752/original/cabf6530-65d5-472b-ae36-77796861cd18.jpeg?im_w=1440"
          ,'https://a0.muscache.com/im/pictures/hosting/Hosting-1117210179713518752/original/c68f1b64-b0f3-4920-9890-5e50a1cff37e.jpeg?im_w=1440',
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1192599625218751634/original/20a1b09d-bcd9-4ad2-848b-47fd7be0b33d.jpeg?im_w=1200",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1192599625218751634/original/df048c7b-eea2-4834-b2e2-e3fab55b752a.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1192599625218751634/original/d9430a11-9b4f-4380-b3ce-01081fac5070.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1192599625218751634/original/ce1260c0-7ecc-4975-b3b5-13e1dab9256b.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1192599625218751634/original/2833b02e-2ec3-405d-b87c-9a555b863998.jpeg?im_w=1440",
          "https://a0.muscache.com/im/pictures/hosting/Hosting-1192814453191326215/original/97fb50c7-96fe-40a6-864a-aa0f68a0ddf2.jpeg?im_w=1440",
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1192814453191326215/original/a6cb6eef-1746-4309-b743-aa99b3ffcf7c.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1192814453191326215/original/321197e0-eaa5-43bf-ad4a-129868dea751.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1192814453191326215/original/ae7e0943-5cfa-457f-9c63-8d6e57abf9aa.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1170851003134360359/original/6b62a436-9f4a-457c-b465-8f9ddbe66d46.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1170851003134360359/original/51e07335-3a6f-47a4-8ef3-a37e25e510bc.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1170851003134360359/original/bf1e4f82-75dd-4379-b690-90c3c906cc73.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1170851003134360359/original/e218a8f0-4cc6-428e-ba5b-a4d71a162762.jpeg?im_w=1440',
          'https://a0.muscache.com/im/pictures/hosting/Hosting-1170851003134360359/original/9fa39f3b-f326-4d9f-8f3c-29cde71a9ab3.jpeg?im_w=1440',
          ];
          function getRandomImages(images, count = 6) {
            const shuffled = images.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
          }
          return getRandomImages(baseImages, 6);
        },
      }),
    },

    routes() {
      this.namespace = "api";

      // Route to get paginated list of rooms
      this.get("/abodeData", (schema, request) => {
        const page = parseInt(request.queryParams.page, 10) || 1;
        const perPage = 12;
        const offset = (page - 1) * perPage;
        const rooms = schema.rooms.all().models.slice(offset, offset + perPage);
        return rooms;
      });

      // Route to get a specific room by ID
      this.get("/abodeData/:id", (schema, request) => {
        const id = request.params.id;
        const room = schema.rooms.find(id);
        return room ? room.attrs : { error: "Room not found" };
      });
    },

    seeds(server) {
      server.createList("room", 60); // Seed with 60 room records
    },
  });
}
makeServerRequest();