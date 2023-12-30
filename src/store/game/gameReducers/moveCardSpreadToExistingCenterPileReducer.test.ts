import { PlayingCard } from "../../../types/PlayingCard";
import { GameAction, GameActionType, GameState } from "../gameTypes";
import { moveCardSpreadToExistingCenterPileReducer } from "./moveCardSpreadToExistingCenterPileReducer";

describe("moveCardSpreadToExistingCenterPileReducer", () => {
  const id = "testId";

  it("should add to center and remove from spread", () => {
    const startingCard: PlayingCard = {
      location: "spread",
      digit: 2,
      color: "red",
      positive: false,
      owner: "testId",
    };
    const destinationCard: PlayingCard = {
      location: "center",
      digit: 1,
      color: "red",
      positive: false,
      owner: "testId",
    };
    const state: GameState = {
      center: [[destinationCard]],
      spread: { [id]: [[startingCard]] },
      stack: {},
      stash: {},
      stashVisible: {},
    };
    const action: GameAction = {
      type: GameActionType.MOVE_CARD_SPREAD_TO_EXISTING_CENTER_PILE,
      id,
      startingCard,
      destinationCard,
    };
    expect(
      moveCardSpreadToExistingCenterPileReducer(state, action)
    ).toStrictEqual({
      center: [
        [
          {
            color: "red",
            digit: 1,
            location: "center",
            owner: "testId",
            positive: false,
          },
          {
            color: "red",
            digit: 2,
            location: "center",
            owner: "testId",
            positive: false,
          },
        ],
      ],
      spread: {
        testId: [],
      },
      stack: {},
      stash: {},
      stashVisible: {},
    });
  });

  it.todo(
    "should add to center and remove from spread if spread has more than one card"
  );
});
